import AsideInfo from './AsideInfo'
import Comments from './Comments'
import UserGames from './UserGames'

import styles from './AdoptInfo.module.scss'

function AdoptInfo() {
  return (
    <div className={styles.adoptInfo}>
      <div>
        <div>
          <UserGames />
          <Comments />
        </div>
        <AsideInfo />
      </div>
    </div>
  )
}

export default AdoptInfo
