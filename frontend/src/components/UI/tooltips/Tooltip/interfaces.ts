import { MouseEventHandler, ReactNode } from "react"

import { HorizontalDirection, VerticalDirection } from "./enums"

export interface TooltipProps {
  children?: ReactNode
  text?: string
  postitionHorizontal?: HorizontalDirection
  postitionVertical?: VerticalDirection
  className?: string
  tooltipClassName?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}
