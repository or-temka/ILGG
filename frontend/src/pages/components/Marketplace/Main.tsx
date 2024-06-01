import ItemInfo from './ItemInfo'
import ItemsField from './ItemsField'
import Apps from './Apps'

import styles from './Main.module.scss'

interface MainProps {
  classNames?: {
    wrapper?: string
  }
}

function Main({ classNames }: MainProps) {
  return (
    <main className={[styles.main, classNames?.wrapper].join(' ')}>
      <div className={styles.main__items}>
        <ItemsField classNames={{ wrapper: styles.main__itemsField }} />
        <ItemInfo classNames={{ wrapper: styles.main__itemInfo }} />
      </div>
      <Apps classNames={{ wrapper: styles.main__apps }} />
    </main>
  )
}

export default Main
