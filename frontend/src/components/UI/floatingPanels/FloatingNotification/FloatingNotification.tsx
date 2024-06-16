import FloatingPanelSkeleton from '../skeletons/FloatingPanelSkeleton/FloatingPanelSkeleton'

import styles from './FloatingNotification.module.scss'

export enum FloatingNotificationVariant {
  msg = styles.notification__header_msg,
  error = styles.notification__header_error,
  success = styles.notification__header_success,
  warning = styles.notification__header_warning,
}

interface FloatingNotificationProps {
  text?: string | number
  variant?: FloatingNotificationVariant
  onClose?: () => void
  headerText?: string | number
  className?: string
  wrapperClassName?: string
}

function FloatingNotification({
  className = '',
  variant = FloatingNotificationVariant.msg,
  text = '',
  onClose = () => {},
  headerText = 'Уведомление',
  wrapperClassName = '',
}: FloatingNotificationProps) {
  return (
    <FloatingPanelSkeleton className={wrapperClassName}>
      <div className={[styles.notification, className].join(' ')}>
        <header className={[styles.notification__header, variant].join(' ')}>
          <span className={styles.notification__headerText}>{headerText}</span>
          <div
            className={styles.notification__closeBtn}
            onClick={onClose}
          ></div>
        </header>
        <main className={styles.notification__main}>
          <span className={styles.notification__textContent}>{text}</span>
        </main>
      </div>
    </FloatingPanelSkeleton>
  )
}

export default FloatingNotification
