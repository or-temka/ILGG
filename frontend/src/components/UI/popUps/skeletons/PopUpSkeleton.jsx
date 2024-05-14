import { useState } from 'react'

import CloseButton from '../../buttons/CloseButton'

import styles from './PopUpSkeleton.module.scss'

function PopUpSkeleton({
  children,
  onClose = () => {}, // Common method: onClickBack, onClickCloseButton
  showCloseButton = true,
  showBack = true,
  backgroundBlur = true,
  className = '',
  backClassName = '',
  contentClassName = '',
  ...params
}) {
  return (
    <div {...params} className={[styles.popUpSkeleton, className].join(' ')}>
      {showBack && (
        <div
          className={[
            styles.popUpSkeleton__back,
            backgroundBlur ? styles.popUpSkeleton__back_blur : '',
            backClassName,
          ].join(' ')}
          onClick={onClose}
        ></div>
      )}

      <div
        className={[styles.popUpSkeleton__content, contentClassName].join(' ')}
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
