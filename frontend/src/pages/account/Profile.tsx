import { useParams } from 'react-router-dom'

import Header from './components/Profile/Header'
import AdoptInfo from './components/Profile/AdoptInfo'

import styles from './Profile.module.scss'

function Profile() {
  const pageParams = useParams()
  const userId = pageParams.id

  return (
    <div className={[styles.profile].join(' ')}>
      <Header />

      <AdoptInfo />
    </div>
  )
}

export default Profile
