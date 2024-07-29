import { myUser } from 'models'

export interface IMyUser {
  _id: string
  login: string
  name: string
  email: string
  isActivated: Boolean
  balance: myUser.IMyUserBalance
  isOnline: Boolean
  about: string
  privacy: myUser.IMyUserPrivacy
  avatar: IMyUserAvatar | null
}

interface IMyUserAvatar {
  filename: string
}
