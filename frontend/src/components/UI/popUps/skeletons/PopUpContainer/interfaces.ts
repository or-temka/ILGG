import { ReactNode } from 'react'

import { popUpHorizontalPosition, popUpVerticalPosition } from 'components'
import { PopUpSkeletonProps } from '../PopUpSkeleton/interfaces'

export interface PopUpContainerProps {
  children: ReactNode
  headerText?: string
  onClose?: (...args: any[]) => any
  showCloseButton?: boolean
  showBack?: boolean
  horizontalPosition?: popUpHorizontalPosition
  verticalPosition?: popUpVerticalPosition
  classNames?: {
    className?: string
    wrapperClassName?: string
    contentClassName?: string
    headerClassName?: string
  }
}
