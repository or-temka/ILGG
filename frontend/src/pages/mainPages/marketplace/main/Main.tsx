import ItemInfo from './components/ItemInfo'
import ItemsField from './components/ItemsField'
import Apps from './components/Apps'
import styles from './Main.module.scss'
import { MainProps } from './interfaces'

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
