import styles from './CardImageText.module.scss'
import { CardImageTextProps } from './interfaces'

function CardImageText({
  children,
  text = '',
  imgSrc = '',
  alt = '',
  onClick = () => {},
  className = '',
  imageClassName = '',
  textClassName = '',
}: CardImageTextProps) {
  return (
    <div className={[styles.card, className].join(' ')} onClick={onClick}>
      {imgSrc && (
        <img
          src={require('assets/images/applications/' + imgSrc)}
          alt={alt}
          className={[styles.card__img, imageClassName].join(' ')}
        ></img>
      )}

      <div className={[styles.card__textContent, textClassName].join(' ')}>
        <div className={[styles.card__textBackground].join(' ')}></div>
        <p className={[styles.card__text].join(' ')}>{text || children}</p>
      </div>
    </div>
  )
}

export default CardImageText
