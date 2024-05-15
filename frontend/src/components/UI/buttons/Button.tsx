import { MouseEventHandler } from 'react'

import styles from './Button.module.scss'

export enum ButtonVariant {
  simple = styles.button_simple,
  light = styles.button_light,
  primary = styles.button_primary,
  shy = styles.button_shy,
}

interface ButtonProps {
  title: string | number
  variant?: ButtonVariant
  disabled?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({
  title = '',
  variant = ButtonVariant.simple,
  disabled = false,
  className = '',
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[
        styles.button,
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
