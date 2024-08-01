import { AvatarInterface } from 'src/models/User/Scheme/Avatar/interfaces/AvatarInterface'
import { FullUserDto } from '../../../dtos'
import { serverError } from '../../../utils'

const editAvatar = async (req: any, res: any) => {
  try {
    if (!req.file) {
      return res.status(403).json({
        message: 'Не загружено изображение в формате .jpg, .png, .jpeg',
      })
    }

    const file = req.file
    const User = req.User
    User.avatar = {}
    const userAvatar = User.avatar

    const avatarQualities: AvatarInterface['qualities'] = {
      good: {
        filename: `${file.filename}`,
      },
      medium: {
        filename: `m-${file.filename}`,
      },
      low: {
        filename: `l-${file.filename}`,
      },
    }
    userAvatar.qualities = avatarQualities
    userAvatar.originalFilename = file.originalname
    userAvatar.size = file.size

    User.save()

    const userDto = new FullUserDto(User)
    res.json({ user: userDto })
  } catch (error: any) {
    serverError(error)
    res.status(500).json({
      message: 'Произошла ошибка загрузки аватара',
    })
  }
}

export default editAvatar
