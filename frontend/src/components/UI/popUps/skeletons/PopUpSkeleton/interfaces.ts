import { popUpHorizontalPosition, popUpVerticalPosition } from 'components'
import { ReactNode } from 'react'

export interface PopUpSkeletonProps {
  children: ReactNode
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  backgroundBlur?: boolean
  verticalPosition?: popUpVerticalPosition
  horizontalPosition?: popUpHorizontalPosition
  classNames?: {
    className?: string
    backClassName?: string
    contentClassName?: string
    mainClassName?: string
  }
  tabIndex?: number
}
