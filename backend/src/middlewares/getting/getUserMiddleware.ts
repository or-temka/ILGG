import { UserModel } from '../../models'
import { serverError } from '../../utils'

export default async (req: any, res: any, next: Function) => {
  try {
    const userId = req.user._id
    const User = await UserModel.findById(userId)

    if (!User)
      return res.status(400).json({ message: 'Не найден пользователь' })

    req.User = User

    next()
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Произошла ошибка аутентификации',
    })
  }
}
