import {
  infoTooltipHorizontalDirection,
  infoTooltipVerticalDirection,
} from 'components'

export interface InfoTooltipProps {
  text: string
  positionHorizontal?: infoTooltipHorizontalDirection
  positionVertical?: infoTooltipVerticalDirection
  className?: string
}
