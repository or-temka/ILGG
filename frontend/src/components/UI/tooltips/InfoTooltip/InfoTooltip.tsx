import { ReactComponent as InfoTooltipSVG } from 'assets/svgs/infoTooltip.svg'
import {
  horizontalDirection as infoTooltipHorizontalDirection,
  verticalDirection as infoTooltipVerticalDirection,
} from './enums'
import { InfoTooltipProps } from './interfaces'
import styles from './InfoTooltip.module.scss'

function InfoTooltip({
  text = '',
  positionHorizontal = infoTooltipHorizontalDirection.right,
  positionVertical = infoTooltipVerticalDirection.top,
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

export {
  InfoTooltip,
  infoTooltipHorizontalDirection,
  infoTooltipVerticalDirection,
}
