import { buttonWithIconIconPosition, buttonWithIconVariant } from './enums'
import { ButtonWithIconProps } from './interfaces'
import styles from '../Button.module.scss'

function ButtonWithIcon({
  title = '',
  iconSVG,
  variant = buttonWithIconVariant.simple,
  iconPosition = buttonWithIconIconPosition.left,
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

export { ButtonWithIcon, buttonWithIconIconPosition, buttonWithIconVariant }
