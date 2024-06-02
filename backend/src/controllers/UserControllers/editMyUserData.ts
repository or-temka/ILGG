import bcrypt from 'bcrypt'
import { validationResult } from 'express-validator'

import { serverError } from '../../utils/serverLog'
import UserModel from '../../models/User'
import hashPassword from '../../utils/auth/hashPassword'

const editMyUserData = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())

    const userId = req.userId

    const existingUser = await UserModel.findById(userId)

    if (!existingUser)
      return res.status(400).json({ errorMsg: 'Не найден пользователь.' })

    // Если меняем и пароль
    let hashedNewPassword = undefined
    const newPassword = req.body.newPassword
    if (newPassword) {
      const enteredOldPassword = req.body.oldPassword
      if (!enteredOldPassword) {
        return res.status(403).json({
          errorMsg: 'Не указан старый пароль.',
        })
      }
      const existingUserHashedPassword = existingUser.passwordHash
      const isValidPass = await bcrypt.compare(
        enteredOldPassword,
        existingUserHashedPassword
      )
      if (!isValidPass) {
        return res.status(403).json({
          errorMsg: 'Старый пароль указан неверно.',
        })
      }

      hashedNewPassword = await hashPassword(newPassword)
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { _id: userId },
      {
        $set: {
          name: req.body.name || existingUser?.name,
          login: req.body.login || existingUser?.login,
          passwordHash: hashedNewPassword || existingUser?.passwordHash,
        },
      },
      { new: true }
    )

    res.json(updatedUser)
  } catch (error: any) {
    serverError(error)
    res
      .status(500)
      .json({ errorMsg: 'Произошла ошибка изменения данных пользователя' })
  }
}

export default editMyUserData
