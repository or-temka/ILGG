import { FloatingPanelSkeleton } from 'components'
import { floatingNotificationVariant } from './enums'
import { FloatingNotificationProps } from './interfaces'
import styles from './FloatingNotification.module.scss'

function FloatingNotification({
  className = '',
  variant = floatingNotificationVariant.msg,
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

export { FloatingNotification, floatingNotificationVariant }
