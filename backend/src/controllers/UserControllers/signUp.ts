import { validationResult } from 'express-validator'

import { serverError } from '../../utils/serverLog'
import hashPassword from '../../utils/auth/hashPassword'
import createJwtTokent from '../../utils/auth/createJwtToken'

import UserModel from '../../models/User'

const reg = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    // hashing password
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if (password !== confirmPassword)
      return res.status(403).json({ errorMsg: 'Пароли не совпадают.' })

    const hashedPassword = await hashPassword(password)

    const doc = new UserModel({
      name: req.body.name,
      login: req.body.login,
      passwordHash: hashedPassword,
      isOnline: true,
      balance: 0,
    })

    const user = await doc.save()

    const token = createJwtTokent(user._id)

    res.status(201).json({ token: token })
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
