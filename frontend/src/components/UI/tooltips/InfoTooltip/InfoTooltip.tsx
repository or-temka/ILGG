import { ReactComponent as InfoTooltipSVG } from 'assets/svgs/infoTooltip.svg'

import styles from './InfoTooltip.module.scss'

export enum HorizontalDirection {
  right = 'right',
  left = 'left',
}
export enum VerticalDirection {
  top = 'top',
  bottom = 'bottom',
}

interface InfoTooltipProps {
  text: string
  positionHorizontal?: HorizontalDirection
  positionVertical?: VerticalDirection
  className?: string
}

function InfoTooltip({
  text = '',
  positionHorizontal = HorizontalDirection.right,
  positionVertical = VerticalDirection.top,
  className = '',
}: InfoTooltipProps) {
  return (
    <div className={[styles.tooltip, className].join(' ')}>
      <div
        className={[
          styles.tooltip__textContainer,
          positionVertical === 'top'
            ? styles.tooltip__textContainer_top
            : styles.tooltip__textContainer_bottom,
          positionHorizontal === 'right'
            ? styles.tooltip__textContainer_right
            : styles.tooltip__textContainer_left,
        ].join(' ')}
      >
        <span className={styles.tooltip__text}>{text}</span>
      </div>
      <div className={styles.tooltip__svgContainer}>
        <InfoTooltipSVG />
      </div>
    </div>
  )
}

export default InfoTooltip
