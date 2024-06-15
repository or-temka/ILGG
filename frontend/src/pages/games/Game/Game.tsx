import { useEffect } from 'react'

import Header from './Header/Header'
import Info from './Info/Info'
import { setPageName } from 'utils/setPageName'

import styles from './Game.module.scss'

function Game() {
  useEffect(() => {
    setPageName('Игра')
  }, [])

  return (
    <div className={styles.page}>
      <div className={styles.page__content}>
        <Header />
        <Info />
      </div>
    </div>
  )
}

export default Game
