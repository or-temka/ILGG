import AppHeader from './components/AppHeader'
import AppFriends from './components/AppFriends'
import AppNews from './components/AppNews'
import styles from './AppWindow.module.scss'
import { AppWindowProps } from './interfaces'


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
