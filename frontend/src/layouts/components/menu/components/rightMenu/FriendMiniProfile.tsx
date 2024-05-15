import { IUserProfile } from '../../../../../interfaces/userProfile'
import MiniProfile, { Button } from './MiniProfile'

const buttons: Button[] = [
  { title: 'Открыть профиль', handler: () => {} },
  { title: 'Присоединиться к игре', handler: () => {} },
  { title: 'Удалить из друзей', handler: () => {} },
]

interface FriendMiniProfileProps {
  userData: IUserProfile
}

function FriendMiniProfile({ userData }: FriendMiniProfileProps) {
  return <MiniProfile buttons={buttons} userData={userData} />
}

export default FriendMiniProfile
