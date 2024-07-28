import { ButtonHTMLAttributes, ReactNode } from 'react'

import { ButtonWithIconIconPosition, ButtonWithIconVariant } from './enums'

export interface ButtonWithIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSVG?: ReactNode
  variant?: ButtonWithIconVariant
  iconPosition?: ButtonWithIconIconPosition
  className?: string

  [key: string]: any
}
