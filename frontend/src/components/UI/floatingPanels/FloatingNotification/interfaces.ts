import { FloatingNotificationVariant } from './enums'

export interface FloatingNotificationProps {
  text?: string | number
  variant?: FloatingNotificationVariant
  onClose?: () => void
  headerText?: string | number
  className?: string
  wrapperClassName?: string
}
