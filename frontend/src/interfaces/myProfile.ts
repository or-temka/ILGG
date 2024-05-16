export enum BalanceCurrency {
  rus = 'руб',
  us = 'usd',
}

export interface IUserBalance {
  currency: BalanceCurrency
  value: number
}

export interface IMyProfile {
  id: string | number
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
  balance: IUserBalance
}
