import { AppOneNewsProps } from './interfaces'
import styles from './AppOneNews.module.scss'

function AppOneNews({ classNames }: AppOneNewsProps) {
  return (
    <article className={[styles.oneNews, classNames?.wrapper].join(' ')}>
      <div className={styles.oneNews__imgContainer}>
        <img
          src={require('assets/images/applications/find-number/news/1/1.jpg')}
          alt="Фото новости"
          className={styles.oneNews__img}
        />
      </div>
      <div className={styles.oneNews__textContent}>
        <header className={styles.oneNews__header}>
          <span className={styles.oneNews__type}>Новость</span>
          <span className={styles.oneNews__headerDecorationText} />
          <span className={styles.oneNews__date}>12 Марта 2024 года</span>
        </header>
        <section className={styles.oneNews__section}>
          <h4 className={styles.oneNews__name}>
            Встречайте! Новый набор с статуэтками уже в продаже.
          </h4>
          <p className={styles.oneNews__text}>
            Уже сегодня мы готовы представить вам не самое крупное обновление, а
            самое крупное выкатывание продукта на рынок, чтобы собрать с вас ещё
            больше деняк.
          </p>
        </section>
      </div>
    </article>
  )
}

export default AppOneNews
