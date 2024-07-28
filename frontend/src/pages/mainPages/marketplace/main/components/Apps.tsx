import { AppsProps } from './interfaces'
import styles from './Apps.module.scss'

function Apps({ classNames }: AppsProps) {
  return (
    <aside className={[styles.apps, classNames?.wrapper].join(' ')}>
      <header className={styles.apps__header}>
        <span className={styles.apps__label}>Приложение</span>
      </header>
      <main className={styles.apps__main}>
        <button className={styles.app}>
          <img
            src={require('../../../../../assets/images/applications/find-number/poster.jpg')}
            className={styles.app__img}
          />
          <span className={styles.app__name}>Find Number</span>
        </button>
        <button className={styles.app}>
          <img
            src={require('../../../../../assets/images/applications/find-number/poster.jpg')}
            className={styles.app__img}
          />
          <span className={styles.app__name}>Find Number</span>
        </button>
      </main>
    </aside>
  )
}

export default Apps
