import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../redux/store'

import {
  fetchShopApps,
  selectShopAppsIsLoaded,
} from '../redux/slices/shopAppsSlice'

import Sorter from './components/Shop/Sorter'
import Main from './components/Shop/Main'
import Filter from './components/Shop/Filter'
import Header from './components/Shop/Header'

import { setPageName } from '../utils/setPageName'

import styles from './Shop.module.scss'

function Shop() {
  const dispatch = useDispatch<AppDispatch>()
  const shopAppsIsLoading = useSelector(selectShopAppsIsLoaded)

  const [resetSort, setResetSort] = useState(0)

  useEffect(() => {
    setPageName('Магазин')
    if (shopAppsIsLoading) {
      dispatch(fetchShopApps())
    }
  }, [])

  const resetSortHandler = () => {
    setResetSort((prev) => prev + 1)
  }

  return (
    <div className={['wrapper', styles.shop].join(' ')}>
      <section className={styles.shop__productsSection}>
        <div className={styles.shop__mainContainer}>
          <Header />
          <main className={styles.shop__main}>
            <Sorter resetSort={resetSort} />
            <Main />
          </main>
        </div>
        <Filter
          classNames={{ main: styles.shop__filter }}
          resetSortHandler={resetSortHandler}
        />
      </section>
    </div>
  )
}

export default Shop
