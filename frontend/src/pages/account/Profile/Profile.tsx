import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from './Header/Header'
import AdoptInfo from './AdoptInfo/AdoptInfo'
import HeaderSkeleton from './Header/components/HeaderSkeleton'
import { setPageName } from 'utils/setPageName'
import { user } from 'models'
import styles from './Profile.module.scss'

const tempUserData: user.IFullUserProfile = {
  id: 1,
  imgName: 'profileImage.jpg',
  name: 'Приора',
  login: 'sversys',
  isOnline: true,
  aboutText:
    'Так давай запоем хоть толпой да хоть вдвоем.\n Мой вконтакте: https://vk.com/sup',
  level: {
    value: 74,
    points: {
      now: 840,
      atLevel: 1000,
    },
  },
  avatar: null,
}

const fetchUserData = () => {
  return tempUserData
}

function Profile() {
  const [userData, setUserData] = useState<user.IFullUserProfile | null>(null)

  const pageParams = useParams()
  const userId = pageParams.id

  //fetching data
  useEffect(() => {
    setTimeout(() => {
      setUserData(fetchUserData())
    }, 1000)
  }, [])

  useEffect(() => {
    if (!userData) return
    setPageName(userData.name)
  }, [userData])

  return (
    <div className={[styles.profile].join(' ')}>
      {userData ? <Header userData={userData} /> : <HeaderSkeleton />}

      <AdoptInfo />
    </div>
  )
}

export default Profile
