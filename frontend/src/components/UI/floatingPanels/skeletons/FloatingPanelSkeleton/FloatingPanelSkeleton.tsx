import styles from './FloatingPanelSkeleton.module.scss'

export enum horizontalDirection {
  left = 'left',
  center = 'center',
  right = 'right',
}
export enum verticalDirection {
  top = 'top',
  center = 'center',
  bottom = 'bottom',
}

interface FloatingPanelSkeletonProps {
  children?: any
  posHorizontal?: horizontalDirection
  posVertical?: verticalDirection
  className?: string
}

function FloatingPanelSkeleton({
  children,
  posHorizontal = horizontalDirection.right,
  posVertical = verticalDirection.bottom,
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

export default FloatingPanelSkeleton
