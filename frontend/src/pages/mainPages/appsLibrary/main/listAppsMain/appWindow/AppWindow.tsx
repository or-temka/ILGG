import AppHeader from './components/AppHeader'
import AppFriends from './components/AppFriends'
import AppNews from './components/AppNews'
import { AppWindowProps } from './interfaces'
import styles from './AppWindow.module.scss'

function AppWindow({ classNames }: AppWindowProps) {
  return (
    <section className={[styles.window, classNames?.wrapper].join(' ')}>
      <AppHeader />
      <main className={styles.window__main}>
        <AppFriends classNames={{ wrapper: styles.window__mainElem }} />
        <AppNews classNames={{ wrapper: styles.window__mainElem }} />
      </main>
    </section>
  )
}

export default AppWindow
