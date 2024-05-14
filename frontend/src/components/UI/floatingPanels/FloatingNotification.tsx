import FloatingPanelSkeleton from './skeletons/FloatingPanelSkeleton'

import styles from './FloatingNotification.module.scss'

interface FloatingNotificationProps {
  text?: string | number
  onClose?: () => void
  headerText?: string | number
  className?: string
  wrapperClassName?: string
}

function FloatingNotification({
  className = '',
  text = '',
  onClose = () => {},
  headerText = 'Уведомление',
  wrapperClassName = '',
}: FloatingNotificationProps) {
  return (
    <FloatingPanelSkeleton className={wrapperClassName}>
      <div className={[styles.notification, className].join(' ')}>
        <header className={styles.notification__header}>
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
