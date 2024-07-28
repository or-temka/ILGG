import MiniProfile from '../components/miniProfile/MiniProfile'
import { Button } from '../components/miniProfile/interfaces'
import { FriendMiniProfileProps } from './interfaces'

const buttons: Button[] = [
  { title: 'Открыть профиль', handler: () => {} },
  { title: 'Присоединиться к игре', handler: () => {} },
  { title: 'Удалить из друзей', handler: () => {} },
]

function FriendMiniProfile({ userData }: FriendMiniProfileProps) {
  return <MiniProfile buttons={buttons} userData={userData} />
}

export default FriendMiniProfile
