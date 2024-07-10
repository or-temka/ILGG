import { validationResult } from 'express-validator'

import { serverError } from '../../../utils/serverLog'

const editProfileInfo = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())

    const User = req.User

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
