import styles from './AboutService.module.scss'
import { AboutServiceProps } from './interfaces'

function AboutService({ classNames }: AboutServiceProps) {
  return (
    <div className={[styles.about, classNames?.wrapper].join(' ')}>
      <div className={styles.about__textContent}>
        <h3 className={styles.about__label}>Почему мы?</h3>
        <ul className={styles.about__whyList}>
          <li className={styles.about__whyListItem}>
            Доступ к вашим играм и приложениям из любой точки мира с любого
            устройства
          </li>
          <li className={styles.about__whyListItem}>
            Множество бесплатных программ
          </li>
          <li className={styles.about__whyListItem}>
            Не требуем скачивания клиента на ваше устройство - всё сразу
            доступно из вашего браузера
          </li>
        </ul>
      </div>
      <div className={styles.about__poster}>
        <img
          className={styles.about__posterImg}
          src={require('assets/images/posters/monitorWithPhone1.png')}
          alt="ILGG для компьютера и телефона"
        />
      </div>
    </div>
  )
}

export default AboutService
