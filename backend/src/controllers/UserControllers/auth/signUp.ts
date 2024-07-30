import { validationResult } from 'express-validator'

import { serverError } from '../../../utils/serverLog'
import hashPassword from '../../../utils/auth/hashPassword'

import UserModel from '../../../models/User/User'
import UnauthorizedEmailModel from '../../../models/UnauthorizedEmail/UnauthorizedEmail'

import TokenService from '../../../services/TokenService'
import createDirectories from '../../../utils/fs/createDirectories'
import { FullUserDto } from '../../../dtos'

const reg = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userLogin = req.body.login
    // Проверка на существование такого пользователя с таким Email или login
    const candidateLogin = await UserModel.findOne({ login: userLogin })
    if (candidateLogin) {
      return res
        .status(409)
        .json({ errorMsg: 'Пользователь с таким логином уже существует' })
    }

    // Проверка на подтвержденную почту
    const activationLink = req.body.activationLink
    const userEmail = req.body.email
    const unauthorizedEmail = await UnauthorizedEmailModel.findOne({
      email: userEmail,
    })
    if (unauthorizedEmail?.activationLink !== activationLink) {
      return res.status(404).json({
        errorMsg: 'Не найден запущенный процесс регистрации.',
      })
    }

    // hashing password
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    if (password !== confirmPassword)
      return res.status(403).json({ errorMsg: 'Пароли не совпадают.' })
    const hashedPassword = await hashPassword(password)

    const doc = new UserModel({
      name: req.body.name,
      email: userEmail,
      login: userLogin,
      password: hashedPassword,
      isOnline: true,
      balance: 0,
    })

    const user = await doc.save()

    // Создание папки с uploads для данного пользователя для загрузки его личных файлов
    const dirsForCreate = ['profile', 'posts']
    createDirectories(dirsForCreate, `users/${user._id}/`)

    const userDto = new FullUserDto(user)
    const tokens = TokenService.generateTokens({ ...userDto })
    await TokenService.saveToken(userDto._id, tokens.refreshToken)

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
