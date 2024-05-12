import { useEffect, useRef, useState } from 'react'
import { ReactComponent as InfoTooltipSVG } from '../../../assets/svgs/infoTooltip.svg'

import styles from './InfoTooltip.module.scss'

function InfoTooltip({
  text = '',
  positionVertical = 'top',
  positionHorizontal = 'right',
  className = '',
  ...params
}) {
  return (
    <div className={styles.tooltip}>
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
