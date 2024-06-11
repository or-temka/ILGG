import { IMyUserBalance } from './IMyUserBalance'

export interface IMyUser {
  id: string
  login: string
  name: string
  email: string
  isActivated: Boolean
  balance: IMyUserBalance
  isOnline: Boolean
}
