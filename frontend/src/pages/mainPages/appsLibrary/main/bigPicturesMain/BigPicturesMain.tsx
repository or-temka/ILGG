import { useSelector } from 'react-redux'

import { selectApps } from '../../../../../redux/slices/myAppsLibrary/slice'
import pageLink from 'pagesLinks'
import { BigPicturesMainProps } from './interfaces'
import { GameBigCard, GameBigCardSkeleton } from 'components'
import styles from './BigPicturesMain.module.scss'

function BigPicturesMain({ classNames }: BigPicturesMainProps) {
  const myGames = useSelector(selectApps)

  if (!myGames.data && myGames.loading) {
    return (
      <div className={[styles.main, classNames?.wrapper].join(' ')}>
        <GameBigCardSkeleton />
        <GameBigCardSkeleton />
        <GameBigCardSkeleton />
      </div>
    )
  }

  return (
    <div className={[styles.main, classNames?.wrapper].join(' ')}>
      {myGames.data?.map((game) => (
        <GameBigCard
          key={game._id}
          name={game.name}
          to={pageLink.game + game._id}
          imgSrc={game.imgSrc}
          aboutGame={game.aboutApp}
          newGame={game.isNewApp}
        />
      ))}
    </div>
  )
}

export default BigPicturesMain
