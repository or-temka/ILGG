import { MouseEventHandler, ReactNode } from 'react'

import styles from './Button.module.scss'

export enum ButtonWithIconVariant {
  simple = styles.button_simple,
  light = styles.button_light,
  primary = styles.button_primary,
}

export enum ButtonWithIconIconPosition {
  left = 'left',
  right = 'right',
}

interface ButtonWithIconProps {
  title: string
  iconSVG?: ReactNode
  variant?: ButtonWithIconVariant
  iconPosition?: ButtonWithIconIconPosition
  disabled?: boolean
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

function ButtonWithIcon({
  title = '',
  iconSVG,
  variant = ButtonWithIconVariant.simple,
  iconPosition = ButtonWithIconIconPosition.left,
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
        variant,
        disabled ? styles.button_disabled : '',
        className,
      ].join(' ')}
      onClick={onClick}
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
