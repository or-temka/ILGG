import { ButtonHTMLAttributes, ReactNode } from 'react'

import styles from '../Button.module.scss'

export enum ButtonWithIconVariant {
  simple = styles.button_simple,
  light = styles.button_light,
  primary = styles.button_primary,
}

export enum ButtonWithIconIconPosition {
  left = 'left',
  right = 'right',
}

interface ButtonWithIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconSVG?: ReactNode
  variant?: ButtonWithIconVariant
  iconPosition?: ButtonWithIconIconPosition
  className?: string

  [key: string]: any
}

function ButtonWithIcon({
  title = '',
  iconSVG,
  variant = ButtonWithIconVariant.simple,
  iconPosition = ButtonWithIconIconPosition.left,
  disabled = false,
  className = '',

  ...restProps
}: ButtonWithIconProps) {
  return (
    <button
      className={[
        styles.button,
        styles.buttonWithIcon,
        variant,
        disabled ? styles.button_disabled : '',
        className,
      ].join(' ')}
      {...restProps}
    >
      {iconPosition === 'left' ? (
        <>
          {iconSVG} {title}
        </>
      ) : (
        <>
          {title} {iconSVG}
        </>
      )}
    </button>
  )
}

export default ButtonWithIcon
