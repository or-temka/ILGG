import { CloseButton } from 'components'
import { popUpHorizontalPosition, popUpVerticalPosition } from './enums'
import { PopUpSkeletonProps } from './interfaces'
import styles from './PopUpSkeleton.module.scss'
import { useCallback, useEffect, useRef } from 'react'

function PopUpSkeleton({
  children,
  onClose = () => {},
  showCloseButton = true,
  showBack = true,
  backgroundBlur = true,
  classNames = {},
  verticalPosition = popUpVerticalPosition.center,
  horizontalPosition = popUpHorizontalPosition.center,
  tabIndex,
}: PopUpSkeletonProps) {
  const popUpRef = useRef<HTMLDivElement>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(
    document.activeElement as HTMLElement
  )

  const onUserClose = useCallback(() => {
    lastFocusedElement.current?.focus()
    onClose()
  }, [onClose])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onUserClose()
      }
    }
    const popUpElement = popUpRef.current

    if (popUpElement) {
      popUpElement.addEventListener('keydown', handleEsc)

      // Фокус на первый интерактивный элемент
      const firstFocusableElement = popUpElement.querySelector(
        'input, button, a, [tabindex]:not([tabindex="-1"])'
      )
      if (firstFocusableElement) {
        ;(firstFocusableElement as HTMLElement).focus()
      }
    }

    return () => {
      if (popUpElement) {
        popUpElement.removeEventListener('keydown', handleEsc)
      }
    }
  }, [popUpRef, onUserClose])

  return (
    <div
      className={[
        styles.popUpSkeleton,
        verticalPosition,
        horizontalPosition,
        classNames.className,
      ].join(' ')}
      ref={popUpRef}
      tabIndex={tabIndex || -1}
    >
      {showBack && (
        <div
          className={[
            styles.popUpSkeleton__back,
            backgroundBlur ? styles.popUpSkeleton__back_blur : '',
            classNames.backClassName,
          ].join(' ')}
          onClick={onUserClose}
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
            onClick={onUserClose}
          />
        )}
      </div>
    </div>
  )
}

export { PopUpSkeleton, popUpHorizontalPosition, popUpVerticalPosition }
