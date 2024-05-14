import styles from './CardImageText.module.scss'

function CardImageText({
  children,
  text = '',
  imgSrc = '',
  alt = '',
  className = '',
  imageClassName = '',
  textClassName = '',
  ...params
}) {
  return (
    <div {...params} className={[styles.card, className].join(' ')}>
      {imgSrc && (
        <img
          src={imgSrc}
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
