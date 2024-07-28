import { floatingNotificationVariant } from 'components'

export interface FloatingNotificationProps {
  text?: string | number
  variant?: floatingNotificationVariant
  onClose?: () => void
  headerText?: string | number
  className?: string
  wrapperClassName?: string
}
