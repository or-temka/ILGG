import { myUser } from 'models'

export interface IMyUser {
  id: string
  login: string
  name: string
  email: string
  isActivated: Boolean
  balance: myUser.IMyUserBalance
  isOnline: Boolean
  about: string
  privacy: myUser.IMyUserPrivacy
}
