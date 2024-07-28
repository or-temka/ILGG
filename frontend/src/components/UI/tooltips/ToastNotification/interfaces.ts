import { ReactNode } from 'react'

export interface ToastNotificationProps {
  children: ReactNode
  text: string
  onEvent?: Function
}
