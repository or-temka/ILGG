import { ReactNode } from 'react'

import CloseButton from '../../buttons/CloseButton'

import styles from './PopUpSkeleton.module.scss'

export enum PopUpVerticalPosition {
  center = styles.popUpSkeleton_Vcenter,
  top = styles.popUpSkeleton_top,
  bottom = styles.popUpSkeleton_bottom,
}
export enum PopUpHorizontalPosition {
  center = styles.popUpSkeleton_Hcenter,
  left = styles.popUpSkeleton_left,
  right = styles.popUpSkeleton_right,
}

interface PopUpSkeletonProps {
  children: ReactNode
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  backgroundBlur?: boolean
  verticalPosition?: PopUpVerticalPosition
  horizontalPosition?: PopUpHorizontalPosition
  classNames?: {
    className?: string
    backClassName?: string
    contentClassName?: string
    mainClassName?: string
  }
}

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
