import { Outlet } from 'react-router-dom'

import Header from './components/header/Header'
import LeftMenu from './components/menu/LeftMenu'
import RightMenu from './components/menu/RightMenu'

import styles from './Layout.module.scss'

interface MainLayoutProps {
  pageName?: string | null
}

function MainLayout({ pageName }: MainLayoutProps) {
  return (
    <>
      <div className={styles.layout}>
        <Header pageName={pageName} className={styles.layout__header} />
        <div className={styles.layout__content}>
          <LeftMenu
            className={[styles.layout__menu, styles.layout__leftMenu].join(' ')}
          />
          <main className={styles.layout__main}>
            <h1
              style={{
                position: 'absolute',
                visibility: 'hidden',
                width: 0,
                height: 0,
                overflow: 'hidden',
              }}
            >
              Онлайн сервис игр и программ ILGG
            </h1>
            <Outlet />
          </main>
          <RightMenu
            className={[styles.layout__menu, styles.layout__rightMenu].join(
              ' '
            )}
          />
        </div>
      </div>
    </>
  )
}

export default MainLayout
