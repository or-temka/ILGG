import { MouseEventHandler } from 'react'

import styles from './Button.module.scss'

export enum Variant {
  simple = 'simple',
  light = 'light',
  primary = 'primary',
}

interface ButtonWithIconProps {
  title: string
  iconSVG?: any
  variant?: Variant
  disabled?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function ButtonWithIcon({
  title = '',
  iconSVG,
  variant = Variant.simple, // types: simple, light, primary
  disabled = false,
  className = '',
  onClick = () => {},
}: ButtonWithIconProps) {
  return (
    <button
      disabled={disabled}
      className={[
        styles.button,
        styles.buttonWithIcon,
        variant === 'light'
          ? styles.button_light
          : variant === 'primary'
          ? styles.button_primary
          : styles.button_simple,
        disabled ? styles.button_disabled : '',
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {iconSVG}
      {title}
    </button>
  )
}

export default ButtonWithIcon
