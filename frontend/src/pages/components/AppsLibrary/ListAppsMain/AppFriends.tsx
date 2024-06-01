import Tooltip, {
  VerticalDirection,
} from '../../../../components/UI/tooltips/Tooltip'

import styles from './AppFriends.module.scss'

interface AppFriendsProps {
  classNames?: {
    wrapper?: string
  }
}

function AppFriends({ classNames }: AppFriendsProps) {
  return (
    <section className={[styles.friends, classNames?.wrapper].join(' ')}>
      <header className={styles.friends__header}>
        <span className={styles.friends__label}>
          Друзья, запускавшие приложение
        </span>
      </header>
      <main className={styles.friends__main}>
        <div className={styles.friends__friendsList}>
          <Tooltip text="Алина" className={styles.friends__friendTooltip}>
            <img
              src={require('../../../../assets/images/profiles/alina.jpg')}
              alt="Пользователь "
              className={styles.friends__friendImage}
            />
          </Tooltip>
        </div>
      </main>
    </section>
  )
}

export default AppFriends
