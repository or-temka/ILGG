import {
  horizontalDirection as floatingPanelSkeletonHorizontalDirection,
  verticalDirection as floatingPanelSkeletonVerticalDirection,
} from './enums'
import { FloatingPanelSkeletonProps } from './interfaces'
import styles from './FloatingPanelSkeleton.module.scss'

function FloatingPanelSkeleton({
  children,
  posHorizontal = floatingPanelSkeletonHorizontalDirection.right,
  posVertical = floatingPanelSkeletonVerticalDirection.bottom,
  className = '',
}: FloatingPanelSkeletonProps) {
  // Определение выравнивания
  // По горизонтали
  const classNamePosHorizontal =
    posHorizontal === 'left'
      ? styles.skeleton_horizontal_left
      : posHorizontal === 'center'
      ? styles.skeleton_horizontal_center
      : styles.skeleton_horizontal_right
  // По вертикали
  const classNamePosVertical =
    posVertical === 'top'
      ? styles.skeleton_vertical_top
      : posVertical === 'center'
      ? styles.skeleton_vertical_center
      : styles.skeleton_vertical_bottom

  return (
    <div
      className={[
        styles.skeleton,
        classNamePosHorizontal,
        classNamePosVertical,
        posHorizontal === 'center' && posVertical === 'center'
          ? styles.skeleton_center
          : '',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export {
  FloatingPanelSkeleton,
  floatingPanelSkeletonHorizontalDirection,
  floatingPanelSkeletonVerticalDirection,
}
