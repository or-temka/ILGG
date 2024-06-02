import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { serverMsg, serverError } from '../utils/serverLog'

import UserModel from '../models/User'

import { TOKEN_KEY } from '../PASSWORDS'

export const reg = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json(errors.array())
    }

    // hashing password
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const doc = new UserModel({
      name: req.body.name,
      login: req.body.login,
      passwordHash: hashedPassword,
      isOnline: true,
      balance: 0,
    })

    const user = await doc.save()

    const token = jwt.sign(
      {
        _id: user._id,
      },
      TOKEN_KEY
    )

    res.json({ token: token })
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

export const getUserData = async (req: any, res: any) => {
  try {
    const user = await UserModel.findById(req.userId)

    if (!user) {
      serverMsg(
        `Попытка получения данных о пользователе (о себе): не найден пользователь с id ${req.userId}`
      )
      return res.status(404).json({
        errorMsg: 'Пользователь не найден',
      })
    }

    const { passwordHash, ...userData } = user.toObject()

    serverMsg(`Получены данные о пользователе (о себе): ${userData.name}`)
    res.json(userData)
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Ошибка получения данных о пользователе',
    })
  }
}
