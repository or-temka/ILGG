import styles from './Tooltip.module.scss'

function Tooltip({
  children,
  text = '',
  postitionVertical = 'top',
  postitionHorizontal = 'center',
  className = '',
  tooltipClassName = '',
  ...params
}) {
  return (
    <div {...params} className={[styles.tooltip, className].join(' ')}>
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
