import AsideInfo from './AsideInfo'
import Comments from './Comments'
import UserGames from './UserGames'
import UserGamesSkeleton from './skeletons/UserGamesSkeleton'

import styles from './AdoptInfo.module.scss'

function AdoptInfo() {
  return (
    <div className={styles.adoptInfo}>
      <div className={styles.adoptInfo__mainContent}>
        <UserGamesSkeleton />
        <UserGames />
        <Comments />
      </div>
      <AsideInfo />
    </div>
  )
}

export default AdoptInfo
