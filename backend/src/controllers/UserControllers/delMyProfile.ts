import { serverError } from '../../utils/serverLog'

import UserModel from '../../models/User'

const delMyProfile = async (req: any, res: any) => {
  try {
    const userId = req.userId

    UserModel.findOneAndDelete({ _id: userId })
      .then((doc) => {
        if (!doc) {
          return res.status(404).json({
            errorMsg: 'Профиль не найден.',
          })
        }

        res.json({ deleted: true })
      })
      .catch((error) => {
        serverError(error)
        res.status(500).json({
          errorMsg: 'Не удалось удалить аккаунт.',
        })
      })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({ errorMsg: 'Произошла ошибка удаления аккаунта.' })
  }
}

export default delMyProfile
