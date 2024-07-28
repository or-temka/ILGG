import { buttonVariant } from 'components'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: buttonVariant
  active?: boolean
  className?: string

  [key: string]: any
}
