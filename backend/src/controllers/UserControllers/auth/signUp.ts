import { validationResult } from 'express-validator'
import { v4 as uuidv4 } from 'uuid'

import { serverError } from '../../../utils/serverLog'

import hashPassword from '../../../utils/auth/hashPassword'

import UserModel from '../../../models/User'

import TokenService from '../../../services/TokenService'
import UserDto from '../../../dtos/MyUserDto'
import MailService from '../../../services/MailService'
import { BASE_API_URL, SITE_API_URL } from '../../../variables'
import { userRouteEnvironment } from '../../../routes/userRoutes'

const reg = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userEmail = req.body.email
    const userLogin = req.body.login
    // Проверка на существование такого пользователя с таким Email или login
    const candidateLogin = await UserModel.findOne({ login: userLogin })
    if (candidateLogin) {
      return res
        .status(409)
        .json({ errorMsg: 'Пользователь с таким логином уже существует' })
    }
    const candidateEmail = await UserModel.findOne({ email: userEmail })
    if (candidateEmail) {
      return res
        .status(409)
        .json({ errorMsg: 'Пользователь с такой почтой уже существует' })
    }

    // hashing password
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    if (password !== confirmPassword)
      return res.status(403).json({ errorMsg: 'Пароли не совпадают.' })

    const hashedPassword = await hashPassword(password)

    const activationLink = uuidv4()

    const doc = new UserModel({
      name: req.body.name,
      email: userEmail,
      login: userLogin,
      password: hashedPassword,
      isOnline: true,
      balance: 0,
      activationLink,
    })

    try {
      await MailService.sendActivationMail(
        userEmail,
        `${SITE_API_URL}${BASE_API_URL}${userRouteEnvironment.base}/activate/${activationLink}`
      )
    } catch (error) {
      return res.status(404).json({
        errorMsg: 'Пользователя с таким Email адресом не существует',
      })
    }

    const user = await doc.save()

    const userDto = new UserDto(user)
    const tokens = TokenService.generateTokens({ ...userDto })
    await TokenService.saveToken(userDto.id, tokens.refreshToken)

    // Сохранение Cookies
    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1_000,
      httpOnly: true,
      // secure: true, // Для HTTPS
    })

    res.status(201).json({ ...tokens, user: userDto })
  } catch (error: any) {
    serverError(error)
    if (error?.keyPattern?.login === 1) {
      return res.status(409).json({
        errorMsg: 'Логин уже занят',
      })
    }
    res.status(500).json({
      errorMsg: 'Произошла ошибка во время регистрации',
    })
  }
}

export default reg
