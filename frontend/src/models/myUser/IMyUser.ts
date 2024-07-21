import { IMyUserBalance } from './IMyUserBalance'
import { IMyUserPrivacy } from './IMyUserPrivacy'

export interface IMyUser {
  id: string
  login: string
  name: string
  email: string
  isActivated: Boolean
  balance: IMyUserBalance
  isOnline: Boolean
  about: string
  privacy: IMyUserPrivacy
}
