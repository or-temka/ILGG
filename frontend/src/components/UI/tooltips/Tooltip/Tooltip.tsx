import { tooltipHorizontalDirection, tooltipVerticalDirection } from './enums'
import { TooltipProps } from './interfaces'
import styles from './Tooltip.module.scss'

function Tooltip({
  children,
  text = '',
  postitionHorizontal = tooltipHorizontalDirection.center,
  postitionVertical = tooltipVerticalDirection.top,
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

export { Tooltip, tooltipHorizontalDirection, tooltipVerticalDirection }
