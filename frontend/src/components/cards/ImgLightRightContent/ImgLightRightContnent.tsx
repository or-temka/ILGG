import styles from './ImgLightRightContent.module.scss'
import { ImgLightRightContentPorops } from './interfaces'

function ImgLightRightContnent({
  children,
  img,
  classNames,
}: ImgLightRightContentPorops) {
  return (
    <div className={[styles.card, classNames?.wrapper].join(' ')}>
      <img
        src={img.src}
        alt={img.alt}
        className={[styles.card__img, classNames?.img].join(' ')}
      />
      <div className={[styles.card__content, classNames?.content].join(' ')}>
        {children}
      </div>
    </div>
  )
}

export default ImgLightRightContnent
