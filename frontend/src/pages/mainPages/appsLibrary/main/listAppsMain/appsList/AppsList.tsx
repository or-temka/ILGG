import AppInList from './components/AppInList'
import { AppsListProps } from './interfaces'
import styles from './AppsList.module.scss'

function AppsList({ apps, classNames }: AppsListProps) {
  const myGames = [...(apps.data || [])].filter((app) => app.types.includes(1))
  const myPrograms = [...(apps.data || [])].filter((app) =>
    app.types.includes(2)
  )

  return (
    <aside className={[styles.list, classNames?.wrapper].join(' ')}>
      <section className={styles.list__section}>
        <header className={styles.list__header}>
          <span className={styles.list__label}>Игры</span>
        </header>
        <main className={styles.list__main}>
          <nav className={styles.list__nav}>
            <ul className={styles.list__appList}>
              {myGames.map((app) => (
                <li key={app._id} className={styles.list__appListItem}>
                  <AppInList appData={app} />
                </li>
              ))}
            </ul>
          </nav>
        </main>
      </section>
      <section className={styles.list__section}>
        <header className={styles.list__header}>
          <span className={styles.list__label}>Приложения</span>
        </header>
        <main className={styles.list__main}>
          <nav className={styles.list__nav}>
            <ul className={styles.list__appList}>
              {myPrograms.map((app) => (
                <li key={app._id} className={styles.list__appListItem}>
                  <AppInList appData={app} />
                </li>
              ))}
            </ul>
          </nav>
        </main>
      </section>
    </aside>
  )
}

export default AppsList
