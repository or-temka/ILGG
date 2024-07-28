import styles from '../Button.module.scss'
import { ButtonWithIconIconPosition, ButtonWithIconVariant } from './enums'
import { ButtonWithIconProps } from './interfaces'

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
export { ButtonWithIconIconPosition, ButtonWithIconVariant }
