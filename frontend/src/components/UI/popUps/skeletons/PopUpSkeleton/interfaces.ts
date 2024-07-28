import { ReactNode } from 'react'

import { PopUpHorizontalPosition, PopUpVerticalPosition } from './enums'

export interface PopUpSkeletonProps {
  children: ReactNode
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  backgroundBlur?: boolean
  verticalPosition?: PopUpVerticalPosition
  horizontalPosition?: PopUpHorizontalPosition
  classNames?: {
    className?: string
    backClassName?: string
    contentClassName?: string
    mainClassName?: string
  }
}
