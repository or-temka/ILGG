import { useCallback, useRef } from 'react'

import styles from './ToastNotification.module.scss'
import { ToastNotificationProps } from './interfaces'

function ToastNotification({
  children,
  text,
  onEvent = () => {},
}: ToastNotificationProps) {
  const toastRef = useRef<HTMLDivElement>(null)

  const clickContentHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!toastRef.current) return
      onEvent()
      toastRef.current.classList.add(styles.toast_animate)
      setTimeout(() => {
        if (!toastRef.current) return
        toastRef.current.classList.remove(styles.toast_animate)
      }, 1000)
    },
    [toastRef, onEvent]
  )

  return (
    <div className={styles.wrapper}>
      <div className={styles.content} onClick={clickContentHandler}>
        {children}
      </div>

      {/* toast */}
      <div ref={toastRef} className={styles.toast}>
        {text}
      </div>
    </div>
  )
}

export default ToastNotification
