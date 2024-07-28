export enum BalanceCurrency {
  rus = 'руб',
  us = 'usd',
}

export interface IMyUserBalance {
  currency: BalanceCurrency
  value: number
}
