import AppHeader from './AppHeader'
import AppFriends from './AppFriends'
import AppNews from './AppNews'

import styles from './AppWindow.module.scss'

interface AppWindowProps {
  classNames?: {
    wrapper?: string
  }
}

function AppWindow({ classNames }: AppWindowProps) {
  return (
    <section className={[styles.window, classNames?.wrapper].join(' ')}>
      <AppHeader />
      <main className={styles.window__main}>
        <AppFriends />
        <AppNews />
      </main>
    </section>
  )
}

export default AppWindow
