import { validationResult } from 'express-validator'
import bcrypt from 'bcrypt'

import { serverError } from '../../../utils/serverLog'
import hashPassword from '../../../utils/auth/hashPassword'
import { FullUserDto } from '../../../dtos'

const editPassword = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())

    const User = req.User

    const oldPassword = req.body.oldPassword
    const isValidPass = await bcrypt.compare(oldPassword, User.password)
    if (!isValidPass)
      return res.status(404).json({ message: 'Указан неверный старый пароль' })

    // Назначение нового пароля
    const password = req.body.newPassword
    const confirmPassword = req.body.newPasswordConfirm
    if (password !== confirmPassword)
      return res.status(403).json({ errorMsg: 'Пароли не совпадают.' })
    const hashedPassword = await hashPassword(password)
    User.password = hashedPassword

    // Отправка ответа
    User.save()
    const userDto = new FullUserDto(User)

    res.json({ user: userDto })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      message: 'Произошла ошибка изменения основных данных пользователя',
    })
  }
}

export default editPassword
