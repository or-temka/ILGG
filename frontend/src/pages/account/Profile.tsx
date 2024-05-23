import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IFullUserProfile } from '../../interfaces/userProfile'

import Header from './components/Profile/Header'
import AdoptInfo from './components/Profile/AdoptInfo'
import HeaderSkeleton from './components/Profile/skeletons/HeaderSkeleton'

import { setPageName } from '../../utils/setPageName'

import styles from './Profile.module.scss'

const tempUserData: IFullUserProfile = {
  _id: 1,
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
}

const fetchUserData = () => {
  return tempUserData
}

function Profile() {
  const [userData, setUserData] = useState<IFullUserProfile | null>(null)

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
