import styles from './AppFriends.module.scss'

interface AppFriendsProps {
  classNames?: {
    wrapper?: string
  }
}

function AppFriends({ classNames }: AppFriendsProps) {
  return <div className={[styles.friends, classNames?.wrapper].join(' ')}></div>
}

export default AppFriends
