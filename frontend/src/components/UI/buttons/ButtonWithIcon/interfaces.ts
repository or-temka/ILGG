import { buttonWithIconIconPosition, buttonWithIconVariant } from 'components'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonWithIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSVG?: ReactNode
  variant?: buttonWithIconVariant
  iconPosition?: buttonWithIconIconPosition
  className?: string

  [key: string]: any
}
