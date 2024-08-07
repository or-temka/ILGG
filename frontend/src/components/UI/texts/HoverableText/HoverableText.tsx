import { useHover } from 'hooks'
import { HoverableTextProps } from './interfaces'
import { useRef } from 'react'
import styles from './HoverableText.module.scss'

function HoverableText({
  defaultText,
  hoverText,
  classNames,
}: HoverableTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isHovering = useHover(ref, { mode: 400 })

  return (
    <span
      className={[
        styles.text,
        isHovering && styles.text_hovering,
        classNames?.wrapper,
      ].join(' ')}
      ref={ref}
    >
      <span className={styles.text__hiddenText}>{defaultText}</span>
      <span
        className={[
          styles.text__text,
          styles.text__defaultText,
          classNames?.defaultText,
        ].join(' ')}
      >
        {defaultText}
      </span>
      <span
        className={[
          styles.text__text,
          styles.text__hoverText,
          classNames?.hoverText,
        ].join(' ')}
      >
        {hoverText}
      </span>
    </span>
  )
}

export { HoverableText }
