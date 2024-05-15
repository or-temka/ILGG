import MiniProfile, { Button, UserData } from './MiniProfile'
import { ReactComponent as ArrowSVG } from '../../../../../assets/svgs/arrow.svg'

import styles from './MyMiniProfile.module.scss'
import { useState } from 'react'

const profileButtons: Button[] = [
  { title: 'Мой профиль', handler: () => {} },
  { title: 'Настройки профиля', handler: () => {} },
  { title: 'Выйти', handler: () => {} },
]

const userData: UserData = {
  name: 'Приора',
  login: 'sversys',
  isOnline: true,
  imgName: 'profileImage.jpg',
}

function MyMiniProfile() {
  const [isShowProfile, setIsShowProfile] = useState(false)

  return (
    <MiniProfile
      buttons={profileButtons}
      userData={userData}
      classNames={{ username: styles.profile__username }}
      iconComponent={
        <div
          className={[
            styles.profile__icon,
            isShowProfile ? styles.profile__icon_active : '',
          ].join(' ')}
        >
          <ArrowSVG />
        </div>
      }
      onClickProfile={(showProfile) => setIsShowProfile(showProfile)}
    />
  )
}

export default MyMiniProfile
