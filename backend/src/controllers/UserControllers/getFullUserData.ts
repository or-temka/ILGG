import { serverError } from '../../utils/serverLog'

import UserModel from '../../models/User'
import isMongoId from '../../utils/typeValidators/isValidMongoId'

const getFullUserData = async (req: any, res: any) => {
  try {
    const userId = req.body.userId

    if (!userId) {
      return res.status(400).json({
        errorMsg: 'В запросе не указан ID пользователя.',
      })
    }

    if (!isMongoId(userId)) {
      return res.status(400).json({
        errorMsg: 'Указанный ID не соответствует формату.',
      })
    }

    const user = await UserModel.findById(userId)

    if (!user) {
      return res.status(404).json({
        errorMsg: 'Пользователь не найден.',
      })
    }

    const fullUserData = user.toObject()

    const userData = {
      _id: fullUserData._id,
      name: fullUserData.name,
      login: fullUserData.login,
      isOnline: fullUserData.isOnline,
    }

    res.json(userData)
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Ошибка получения данных о пользователе.',
    })
  }
}

export default getFullUserData
