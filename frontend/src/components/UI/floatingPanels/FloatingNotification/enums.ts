import styles from './FloatingNotification.module.scss'

export enum floatingNotificationVariant {
  msg = styles.notification__header_msg,
  error = styles.notification__header_error,
  success = styles.notification__header_success,
  warning = styles.notification__header_warning,
}
