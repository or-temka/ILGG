import { useEffect } from 'react'

import Header from './components/UserInventory/Header'
import Main from './components/UserInventory/Main'

import { setPageName } from '../utils/setPageName'

import styles from './UserInventory.module.scss'

function Inventory() {
  useEffect(() => {
    setPageName('Инвентарь')
  }, [])

  return (
    <>
      <div className={['wrapper', styles.page].join(' ')}>
        <Header />
        <Main />
      </div>
    </>
  )
}

export default Inventory
