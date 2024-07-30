import bcrypt from 'bcrypt'

import { validationResult } from 'express-validator'
import { serverError } from '../../../utils'
import TokenService from '../../../services/TokenService'
import { FullUserDto } from '../../../dtos'
import { UserModel } from '../../../models'

const signIn = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())

    const user = await UserModel.findOne({ login: req.body.login })

    if (!user) {
      return res.status(404).json({
        errorMsg: 'Неверный логин или пароль.',
      })
    }

    const isValidPass = await bcrypt.compare(req.body.password, user.password)

    if (!isValidPass) {
      return res.status(404).json({
        errorMsg: 'Неверный логин или пароль.',
      })
    }

    const userDto = new FullUserDto(user)
    const tokens = TokenService.generateTokens({ ...userDto })

    await TokenService.saveToken(userDto._id, tokens.refreshToken)

    // Сохранение Cookies
    res.cookie('refreshToken', tokens.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1_000,
      httpOnly: true,
      // secure: true, // Для HTTPS
    })

    res.json({ ...tokens, user: userDto })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка входа в аккаунт.',
    })
  }
}

export default signIn
