import {
  tooltipHorizontalDirection,
  tooltipVerticalDirection,
} from 'components'
import { MouseEventHandler, ReactNode } from 'react'

export interface TooltipProps {
  children?: ReactNode
  text?: string
  postitionHorizontal?: tooltipHorizontalDirection
  postitionVertical?: tooltipVerticalDirection
  className?: string
  tooltipClassName?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}
