import { CloseButtonProps } from './interfaces'
import styles from './CloseButton.module.scss'

function CloseButton({
  isWithoutPadding = false,
  className = '',
  crossClassName = '',
  ...restProps
}: CloseButtonProps) {
  return (
    <div
      className={[
        styles.closeButton,
        className,
        isWithoutPadding && styles.closeButton_withoutPadding,
      ].join(' ')}
      {...restProps}
    >
      <div
        className={[styles.closeButton__cross, crossClassName].join(' ')}
      ></div>
    </div>
  )
}

export { CloseButton }
