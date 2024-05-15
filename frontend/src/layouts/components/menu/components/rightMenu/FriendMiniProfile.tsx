import MiniProfile, { Button, UserData } from './MiniProfile'

const buttons: Button[] = [
  { title: 'Открыть профиль', handler: () => {} },
  { title: 'Присоединиться к игре', handler: () => {} },
  { title: 'Удалить из друзей', handler: () => {} },
]

interface FriendMiniProfileProps {
  userData: UserData
}

function FriendMiniProfile({ userData }: FriendMiniProfileProps) {
  return <MiniProfile buttons={buttons} userData={userData} />
}

export default FriendMiniProfile
