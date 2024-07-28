import useHover from 'hooks/useHover'
import styles from './HoverableText.module.scss'
import { HoverableTextProps } from './interfaces'
import { useRef } from 'react'

function HoverableText({ defaultText, hoverText }: HoverableTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isHovering = useHover(ref, { mode: 400 })

  return (
    <span
      className={[styles.text, isHovering && styles.text_hovering].join(' ')}
      ref={ref}
    >
      <span className={styles.text__hiddenText}>{defaultText}</span>
      <span className={[styles.text__text, styles.text__defaultText].join(' ')}>
        {defaultText}
      </span>
      <span className={[styles.text__text, styles.text__hoverText].join(' ')}>
        {hoverText}
      </span>
    </span>
  )
}

export default HoverableText
