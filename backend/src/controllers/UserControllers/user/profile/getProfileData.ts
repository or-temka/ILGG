import { serverError } from '../../../../utils'
import { SomeFullUserDto } from '../../../../dtos'
import { UserModel } from '../../../../models'

const getProfileData = async (req: any, res: any) => {
  try {
    const User = await UserModel.findOne({ login: req.params.login })

    if (!User) {
      return res.status(404).json({
        errorMsg: 'Пользователь не найден.',
      })
    }

    const userDto = new SomeFullUserDto(User)

    res.json({ user: userDto })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      errorMsg: 'Ошибка получения данных профиля пользователя.',
    })
  }
}

export default getProfileData
