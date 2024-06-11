import { IMyUserBalance } from './IMyUserBalance'

export interface IMyUser {
  id: string
  login: string
  email: string
  isActivated: Boolean
  balance: IMyUserBalance
}
