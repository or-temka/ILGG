import { MouseEventHandler } from 'react'

import styles from '../Button.module.scss'

export enum ButtonVariant {
  simple = styles.button_simple,
  light = styles.button_light,
  primary = styles.button_primary,
  shy = styles.button_shy,
  menu = styles.button_menu,
}

interface ButtonProps {
  title: string | number
  buttonType?: 'button' | 'submit' | 'reset' | undefined
  variant?: ButtonVariant
  disabled?: boolean
  active?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({
  title = '',
  buttonType = 'button',
  variant = ButtonVariant.simple,
  disabled = false,
  active = false,
  className = '',
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      type={buttonType}
      disabled={disabled}
      className={[
        styles.button,
        active && styles.button_active,
        variant,
        disabled && styles.button_disabled,
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default Button
