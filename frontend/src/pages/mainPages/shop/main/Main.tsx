import { useSelector } from 'react-redux'

import {
  selectShopApps,
  selectShopAppsIsLoaded,
} from '../../../../redux/slices/shopApps/slice'
import GameBigCardSkeleton from 'components/cards/GameBigCardSkeleton/GameBigCardSkeleton'
import GameBigCard from 'components/cards/GameBigCard/GameBigCard'
import pageLink from 'pagesLinks'

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
            name={app.name + ' / ' + app.price}
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
