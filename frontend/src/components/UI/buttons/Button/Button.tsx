import { buttonVariant } from './enums'
import { ButtonProps } from './interfaces'
import styles from '../Button.module.scss'

function Button({
  title = '',
  variant = buttonVariant.simple,
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

export { Button, buttonVariant }
