import { MouseEventHandler } from 'react'

import styles from './Button.module.scss'

export enum Variant {
  simple = 'simple',
  light = 'light',
  primary = 'primary',
}

interface ButtonProps {
  title: string | number
  variant?: Variant
  disabled?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function Button({
  title = '',
  variant = Variant.simple,
  disabled = false,
  className = '',
  onClick = () => {},
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className={[
        styles.button,
        variant === 'light'
          ? styles.button_light
          : variant === 'primary'
          ? styles.button_primary
          : styles.button_simple,
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
