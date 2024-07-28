import { ReactNode } from 'react'

import {
  PopUpHorizontalPosition,
  PopUpVerticalPosition,
} from '../PopUpSkeleton/PopUpSkeleton'

export interface PopUpContainerProps {
  children: ReactNode
  headerText?: string
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  horizontalPosition?: PopUpHorizontalPosition
  verticalPosition?: PopUpVerticalPosition
  classNames?: {
    className?: string
    wrapperClassName?: string
    contentClassName?: string
    headerClassName?: string
  }
}
