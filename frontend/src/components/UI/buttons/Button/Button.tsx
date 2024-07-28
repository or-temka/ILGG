import styles from '../Button.module.scss'
import { ButtonVariant } from './enums'
import { ButtonProps } from './interfaces'

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
export { ButtonVariant }
