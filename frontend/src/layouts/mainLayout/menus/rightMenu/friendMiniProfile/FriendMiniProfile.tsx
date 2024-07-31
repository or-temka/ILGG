import { useNavigate } from 'react-router-dom'
import MiniProfile from '../components/miniProfile/MiniProfile'
import { Button } from '../components/miniProfile/interfaces'
import { FriendMiniProfileProps } from './interfaces'
import pageLink from 'pagesLinks'

function FriendMiniProfile({ userData }: FriendMiniProfileProps) {
  const navigate = useNavigate()

  const buttons: Button[] = [
    {
      title: 'Открыть профиль',
      handler: () => navigate(pageLink.profile + userData?.login),
    },
    { title: 'Присоединиться к игре', handler: () => {} },
    { title: 'Удалить из друзей', handler: () => {} },
  ]

  return <MiniProfile buttons={buttons} userData={userData} />
}

export default FriendMiniProfile
