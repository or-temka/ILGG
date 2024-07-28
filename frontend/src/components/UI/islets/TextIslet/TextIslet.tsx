import { TextIsletProps } from './interfaces'
import styles from './TextIslet.module.scss'

function TextIslet({ children, onClick, classNames }: TextIsletProps) {
  const onClickHandler = () => {
    if (!onClick) return
    onClick()
  }

  return (
    <div
      className={[
        styles.text,
        onClick ? styles.text_clickable : '',
        classNames?.text,
      ].join(' ')}
      onClick={onClickHandler}
    >
      {children}
    </div>
  )
}

export default TextIslet
