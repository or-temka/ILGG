import { useParams } from 'react-router-dom'

import Header from './components/Profile/Header'

import styles from './Profile.module.scss'

function Profile() {
  const pageParams = useParams()
  const userId = pageParams.id

  return (
    <div className={[styles.profile].join(' ')}>
      <Header />

      <img
        src={require('../../assets/images/Frame 66.jpg')}
        className={styles.profile__infoImg}
      />
    </div>
  )
}

export default Profile
