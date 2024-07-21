import { ButtonHTMLAttributes } from 'react'

import styles from '../Button.module.scss'

export enum ButtonVariant {
  simple = styles.button_simple,
  light = styles.button_light,
  primary = styles.button_primary,
  shy = styles.button_shy,
  menu = styles.button_menu,
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  active?: boolean
  className?: string

  [key: string]: any
}

function Button({
  title = '',
  variant = ButtonVariant.simple,
  disabled = false,
  active = false,
  className = '',
  ...restProps
}: ButtonProps) {
  return (
    <button
      className={[
        styles.button,
        active && styles.button_active,
        variant,
        disabled && styles.button_disabled,
        className,
      ].join(' ')}
      disabled={disabled}
      {...restProps}
    >
      {title}
    </button>
  )
}

export default Button
