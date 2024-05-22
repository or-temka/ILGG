import { MongoId } from "./main"

export enum BalanceCurrency {
  rus = 'руб',
  us = 'usd',
}

export interface IUserBalance {
  currency: BalanceCurrency
  value: number
}

export interface IMyProfile {
  _id: MongoId
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
  balance: IUserBalance
}
