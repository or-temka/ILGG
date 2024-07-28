import { mongoDB } from 'models'

export interface IUserProfile {
  id: mongoDB.id
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
  avatar: IMyUserAvatar | null
}

interface IMyUserAvatar {
  filename: string
}
