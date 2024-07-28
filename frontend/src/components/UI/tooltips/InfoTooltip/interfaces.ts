import { HorizontalDirection, VerticalDirection } from './enums'

export interface InfoTooltipProps {
  text: string
  positionHorizontal?: HorizontalDirection
  positionVertical?: VerticalDirection
  className?: string
}
