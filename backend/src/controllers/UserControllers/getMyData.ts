import { UserModel } from '../../models'
import { serverError } from '../../utils'

const getMyData = async (req: any, res: any) => {
  try {
    const user = await UserModel.findById(req.userId)

    if (!user) {
      return res.status(404).json({
        errorMsg: 'Пользователь не найден.',
      })
    }

    const { password, ...userData } = user.toObject()

    res.json(userData)
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Ошибка получения данных.',
    })
  }
}

export default getMyData
