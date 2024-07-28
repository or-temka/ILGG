import { Link } from 'react-router-dom'

import pageLink from 'pagesLinks'
import { FriendsPanelProps } from './interfaces'
import { Tooltip, tooltipVerticalDirection } from 'components'
import styles from './FriendsPanel.module.scss'

function FriendsPanel({ friends }: FriendsPanelProps) {
  return (
    <div className={styles.panel}>
      <span className={styles.panel__label}>Друзья:</span>

      <div className={styles.panel__friends}>
        {friends.map((friend) => (
          <Link to={pageLink.profile + friend._id} key={friend._id}>
            <Tooltip
              postitionVertical={tooltipVerticalDirection.bottom}
              text={friend.name}
            >
              <img
                src={require(`assets/images/profiles/${friend.imgName}`)}
                alt="Профиль пользователя"
                className={[
                  styles.panel__friendImg,
                  friend.isOnline ? styles.panel__friendImg_online : '',
                ].join(' ')}
              />
            </Tooltip>
          </Link>
        ))}
      </div>

      <div className={styles.panel__moreBtnContainer}>
        <span className={styles.panel__moreBtn}>Показать ещё...</span>
      </div>
    </div>
  )
}

export default FriendsPanel
