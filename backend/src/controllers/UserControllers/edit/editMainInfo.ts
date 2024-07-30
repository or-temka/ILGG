import { validationResult } from 'express-validator'

import { serverError } from '../../../utils/serverLog'
import { FullUserDto } from '../../../dtos'

const editMainInfo = async (req: any, res: any) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json(errors.array())

    const User = req.User

    User.login = req.body.login || User?.login
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

export default editMainInfo
