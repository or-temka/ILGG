import { IUserProfile } from '../../../../interfaces/userProfile'

import FriendsPanel from './FriendsPanel'
import ProfileBlockedPanel from './ProfileBlockedPanel'
import FriendsPanelSkeleton from './skeletons/FriendsPanelSkeleton'

import styles from './AsideInfo.module.scss'
import Button from '../../../../components/UI/buttons/Button'

const friends: IUserProfile[] = [
  {
    id: 1,
    name: 'Алинка',
    login: 'alina',
    imgName: 'alina.jpg',
    isOnline: true,
  },
  {
    id: 2,
    name: 'муха',
    login: 'muhtar',
    imgName: 'myhtar.jpg',
    isOnline: false,
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