import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'

import Header from './header/Header'
import LeftMenu from './menus/leftMenu/LeftMenu'
import RightMenu from './menus/rightMenu/RightMenu'
import LoadingSpiner from 'components/UI/loaders/LoadingSpiner'
import CookiesAccept from './cookiesAccept/CookiesAccept'

import styles from './MainLayout.module.scss'

function MainLayout() {
  const [showCookiesAccept, setShowCookiesAccept] = useState(
    !localStorage.getItem('cookiesAccepted')
  )

  return (
    <>
      <div className={styles.layout}>
        <Header className={styles.layout__header} />
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
          <Suspense
            fallback={
              <div className={styles.layout__loadingSpinnerContainer}>
                <LoadingSpiner />
              </div>
            }
          >
            <Outlet />
          </Suspense>
        </main>
        <RightMenu
          className={[styles.layout__menu, styles.layout__rightMenu].join(' ')}
        />
      </div>

      {showCookiesAccept && (
        <CookiesAccept onClose={() => setShowCookiesAccept(false)} />
      )}
    </>
  )
}

export default MainLayout
