import { ButtonHTMLAttributes } from 'react'

import { ButtonVariant } from './enums'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  active?: boolean
  className?: string

  [key: string]: any
}
