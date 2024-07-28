import { useSelector } from 'react-redux'

import { selectApps } from '../../../../../redux/slices/myAppsLibrary/slice'
import GameBigCard from 'components/cards/GameBigCard/GameBigCard'
import pageLink from 'pagesLinks'
import GameBigCardSkeleton from 'components/cards/GameBigCardSkeleton/GameBigCardSkeleton'
import styles from './BigPicturesMain.module.scss'
import { BigPicturesMainProps } from './interfaces'

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
