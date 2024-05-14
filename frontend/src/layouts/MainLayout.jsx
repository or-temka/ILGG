import { Outlet } from 'react-router-dom'

import Header from './components/header/Header'
import LeftMenu from './components/menu/LeftMenu'
import RightMenu from './components/menu/RightMenu'

import styles from './Layout.module.scss'

function MainLayout({ pageName }) {
  return (
    <>
      <div className={styles.layout}>
        <Header pageName={pageName} />
        <div className={styles.layout__content}>
          <LeftMenu
            className={[styles.layout__menu, styles.layout__leftMenu].join(' ')}
          />
          <main className={styles.layout__main}>
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
