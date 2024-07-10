import { validationResult } from 'express-validator'

import { serverError } from '../../../../utils/serverLog'
import hashPassword from '../../../../utils/auth/hashPassword'

import UserModel from '../../../../models/User/User'
import RecoveryEmailModel from '../../../../models/RecoveryEmail/RecoveryEmail'

import TokenService from '../../../../services/TokenService'
import UserDto from '../../../../dtos/MyUserDto'

const recovery = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    const userEmail = req.body.email
    // Проверка на существование такого пользователя с таким Email
    const candidate = await UserModel.findOne({ email: userEmail })
    if (!candidate) {
      return res.status(409).json({ errorMsg: 'Пользователя не существует.' })
    }

    // Проверка на подтвержденную почту
    const activationLink = req.body.activationLink
    const recoveryEmail = await RecoveryEmailModel.findOne({
      email: userEmail,
    })
    if (!recoveryEmail) {
      return res.status(404).json({
        errorMsg:
          'Не найден запущенный процесс восстановления доступа к аккаунту.',
      })
    }
    if (recoveryEmail?.activationLink !== activationLink) {
      return res.status(404).json({
        errorMsg: 'Указан неверная ссылка активации.',
      })
    }

    // hashing password
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword
    if (password !== confirmPassword)
      return res.status(403).json({ errorMsg: 'Пароли не совпадают.' })
    const hashedPassword = await hashPassword(password)

    candidate.password = hashedPassword

    await candidate.save()
    await recoveryEmail.deleteOne()

    const userDto = new UserDto(candidate)
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

export default recovery
