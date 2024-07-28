import { horizontalDirection, verticalDirection } from './enums'

export interface FloatingPanelSkeletonProps {
  children?: any
  posHorizontal?: horizontalDirection
  posVertical?: verticalDirection
  className?: string
}
