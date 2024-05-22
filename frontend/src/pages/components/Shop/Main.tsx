import { useSelector } from 'react-redux'

import {
  selectShopApps,
  selectShopAppsIsLoaded,
} from '../../../redux/slices/shopAppsSlice'

import GameBigCardSkeleton from '../../../components/cards/GameBigCardSkeleton'
import GameBigCard from '../../../components/cards/GameBigCard'
import pageLink from '../../../pagesLinks'

import styles from './Main.module.scss'

function Main() {
  const shopAppsIsLoding = useSelector(selectShopAppsIsLoaded)

  const shopApps = useSelector(selectShopApps)

  return (
    <div className={styles.main}>
      {shopAppsIsLoding ? (
        <>
          <GameBigCardSkeleton />
          <GameBigCardSkeleton />
          <GameBigCardSkeleton />
        </>
      ) : (
        shopApps.map((app) => (
          <GameBigCard
            key={app._id}
            name={app.name}
            imgSrc={app.imgSrc}
            aboutGame={app.aboutApp}
            to={pageLink.applicationPage + app._id}
            newGame={app.isNewApp}
          />
        ))
      )}
    </div>
  )
}

export default Main
