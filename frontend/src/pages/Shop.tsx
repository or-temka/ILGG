import { useEffect } from 'react'
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

import styles from './Shop.module.scss'

function Shop() {
  const dispatch = useDispatch<AppDispatch>()
  const shopAppsIsLoading = useSelector(selectShopAppsIsLoaded)

  useEffect(() => {
    if (shopAppsIsLoading) {
      dispatch(fetchShopApps())
    }
  }, [])

  return (
    <div className={['wrapper', styles.shop].join(' ')}>
      <section className={styles.shop__productsSection}>
        <div className={styles.shop__mainContainer}>
          <Header />
          <main className={styles.shop__main}>
            <Sorter />
          </main>
        </div>
      </section>
    </div>
  )
}

export default Shop
