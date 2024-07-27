import styles from './HoverableText.module.scss'
import { HoverableTextProps } from './interfaces'

function HoverableText({ defaultText, hoverText }: HoverableTextProps) {
  return (
    <span className={styles.text}>
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
