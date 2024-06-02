import bcrypt from 'bcrypt'

import { validationResult } from 'express-validator'
import { serverError } from '../../utils/serverLog'

import UserModel from '../../models/User'
import createJwtTokent from '../../utils/auth/createJwtToken'

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

    const isValidPass = await bcrypt.compare(
      req.body.password,
      user.passwordHash
    )

    if (!isValidPass) {
      return res.status(404).json({
        errorMsg: 'Неверный логин или пароль.',
      })
    }

    const token = createJwtTokent(user._id)

    res.json({ token: token })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка входа в аккаунт.',
    })
  }
}

export default signIn
