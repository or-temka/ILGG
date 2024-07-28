import { ChangeEventHandler, MouseEventHandler } from "react"

export interface AccountBalanceProps {
  onClickAccount?: (...args: any[]) => any
  onClickToReplenish?: (...args: any[]) => any
  className?: string
}

export interface HeaderProps {
  className?: string
}

export interface HeaderSearchInputProps {
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
  className?: string
}
