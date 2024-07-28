import CloseButton from 'components/UI/buttons/CloseButton/CloseButton'
import styles from './PopUpSkeleton.module.scss'
import { PopUpHorizontalPosition, PopUpVerticalPosition } from './enums'
import { PopUpSkeletonProps } from './interfaces'

function PopUpSkeleton({
  children,
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  backgroundBlur = true,
  classNames = {},
  verticalPosition = PopUpVerticalPosition.center,
  horizontalPosition = PopUpHorizontalPosition.center,
}: PopUpSkeletonProps) {
  return (
    <div
      className={[
        styles.popUpSkeleton,
        verticalPosition,
        horizontalPosition,
        classNames.className,
      ].join(' ')}
    >
      {showBack && (
        <div
          className={[
            styles.popUpSkeleton__back,
            backgroundBlur ? styles.popUpSkeleton__back_blur : '',
            classNames.backClassName,
          ].join(' ')}
          onClick={onClose}
        ></div>
      )}

      <div
        className={[
          styles.popUpSkeleton__content,
          classNames.contentClassName,
        ].join(' ')}
      >
        {children}

        {showCloseButton && (
          <CloseButton
            className={styles.popUpSkeleton__closeButton}
            onClick={onClose}
          />
        )}
      </div>
    </div>
  )
}

export default PopUpSkeleton
export { PopUpHorizontalPosition, PopUpVerticalPosition }
