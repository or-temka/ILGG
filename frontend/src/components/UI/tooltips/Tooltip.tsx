import { MouseEventHandler, ReactNode } from 'react'

import styles from './Tooltip.module.scss'

export enum HorizontalDirection {
  left = 'left',
  center = 'center',
  right = 'right',
}
export enum VerticalDirection {
  top = 'top',
  bottom = 'bottom',
}

interface TooltipProps {
  children?: ReactNode
  text?: string
  postitionHorizontal?: HorizontalDirection
  postitionVertical?: VerticalDirection
  className?: string
  tooltipClassName?: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

function Tooltip({
  children,
  text = '',
  postitionHorizontal = HorizontalDirection.center,
  postitionVertical = VerticalDirection.top,
  className = '',
  tooltipClassName = '',
  onClick = () => {},
}: TooltipProps) {
  return (
    <div className={[styles.tooltip, className].join(' ')} onClick={onClick}>
      <div
        className={[
          styles.tooltip__tooltip,
          postitionVertical === 'top'
            ? styles.tooltip__tooltip_top
            : styles.tooltip__tooltip_bottom,

          postitionHorizontal === 'left'
            ? styles.tooltip__tooltip_left
            : postitionHorizontal === 'right'
            ? styles.tooltip__tooltip_right
            : styles.tooltip__tooltip_center,
          tooltipClassName,
        ].join(' ')}
      >
        {text}
      </div>
      {children}
    </div>
  )
}

export default Tooltip
