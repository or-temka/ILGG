import { IUserProfile } from 'models/user/IUserProfile'

import MiniProfile, { Button } from '../components/miniProfile/MiniProfile'

const buttons: Button[] = [
  { title: 'Открыть профиль', handler: () => {} },
  { title: 'Присоединиться к игре', handler: () => {} },
  { title: 'Удалить из друзей', handler: () => {} },
]

interface FriendMiniProfileProps {
  userData: IUserProfile | null
}

function FriendMiniProfile({ userData }: FriendMiniProfileProps) {
  return <MiniProfile buttons={buttons} userData={userData} />
}

export default FriendMiniProfile
