import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from './Header/Header'
import AdoptInfo from './AdoptInfo/AdoptInfo'
import HeaderSkeleton from './Header/components/HeaderSkeleton'
import { setPageName } from 'utils/setPageName'
import { user } from 'models'
import styles from './Profile.module.scss'
import { UserProfileService } from 'services'

function Profile() {
  const [userData, setUserData] = useState<user.IUserProfile | null>(null)

  const pageParams = useParams()
  const userLogin = pageParams.login

  useEffect(() => {
    if (!userLogin) return
    UserProfileService.fetchUserProfileData(userLogin)
      .then((res) => {
        const user = res.data.user
        setUserData(user)
      })
      .catch((err) => console.log(err))
  }, [userLogin])

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
