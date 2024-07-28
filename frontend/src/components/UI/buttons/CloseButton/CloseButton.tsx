import styles from './CloseButton.module.scss'
import { CloseButtonProps } from './interfaces'

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

export default CloseButton
