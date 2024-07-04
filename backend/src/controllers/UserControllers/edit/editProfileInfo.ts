import { validationResult } from 'express-validator'

import { serverError } from '../../../utils/serverLog'
import UserModel from '../../../models/User'

const editProfileInfo = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())

    const userId = req.user.id

    const User = await UserModel.findById(userId)

    if (!User)
      return res.status(400).json({ message: 'Не найден пользователь' })

    User.name = req.body.name || User?.name
    User.about = req.body.about || User?.about
    User.save()

    res.json(User)
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      message: 'Произошла ошибка изменения данных профиля пользователя',
    })
  }
}

export default editProfileInfo
