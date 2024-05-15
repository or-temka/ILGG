import { ReactNode } from 'react'

import CloseButton from '../../buttons/CloseButton'

import styles from './PopUpSkeleton.module.scss'

interface PopUpSkeletonProps {
  children: ReactNode
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  backgroundBlur?: boolean
  classNames?: {
    className?: string
    backClassName?: string
    contentClassName?: string
  }
}

function PopUpSkeleton({
  children,
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  backgroundBlur = true,
  classNames = {},
}: PopUpSkeletonProps) {
  return (
    <div className={[styles.popUpSkeleton, classNames.className].join(' ')}>
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
