import FriendsPanel from './components/FriendsPanel'
import ProfileBlockedPanel from './components/ProfileBlockedPanel'
import FriendsPanelSkeleton from '../skeletons/FriendsPanelSkeleton'
import { user } from 'models'
import { Button } from 'components'
import styles from './AsideInfo.module.scss'

const friends: user.IUserProfile[] = [
  {
    _id: 1,
    name: 'Алинка',
    login: 'alina',
    imgName: 'alina.jpg',
    isOnline: true,
    avatar: null,
  },
  {
    _id: 2,
    name: 'муха',
    login: 'muhtar',
    imgName: 'myhtar.jpg',
    isOnline: false,
    avatar: null,
  },
]

function AsideInfo() {
  return (
    <div className={['asideContent', styles.aside].join(' ')}>
      <ProfileBlockedPanel />

      <FriendsPanelSkeleton />
      <FriendsPanel friends={friends} />

      <Button title="Инвентарь" />
    </div>
  )
}

export default AsideInfo
