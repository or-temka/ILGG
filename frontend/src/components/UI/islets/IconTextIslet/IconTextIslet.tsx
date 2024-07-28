import { IconTextIsletProps } from './interfaces'
import styles from './IconTextIslet.module.scss'

function IconTextIslet({
  svgComponent,
  text,
  onClick,
  classNames,
}: IconTextIsletProps) {
  const onClickHandler = () => {
    if (!onClick) return
    onClick()
  }

  return (
    <div
      className={[
        styles.text,
        onClick ? styles.text_clickable : '',
        classNames?.wrapper,
      ].join(' ')}
    >
      <div
        className={[styles.text__svgContainer, classNames?.iconContainer].join(
          ' '
        )}
        onClick={onClickHandler}
      >
        {svgComponent}
      </div>
      <div
        className={[styles.text__textContainer, classNames?.textContainer].join(
          ' '
        )}
      >
        {text}
      </div>
    </div>
  )
}

export { IconTextIslet }
