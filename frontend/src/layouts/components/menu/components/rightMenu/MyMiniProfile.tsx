import { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectUser } from '../../../../../redux/slices/myProfileSlice'

import MiniProfile, { Button } from './MiniProfile'
import { ReactComponent as ArrowSVG } from '../../../../../assets/svgs/arrow.svg'

import styles from './MyMiniProfile.module.scss'

const profileButtons: Button[] = [
  { title: 'Мой профиль', handler: () => {} },
  { title: 'Настройки профиля', handler: () => {} },
  { title: 'Выйти', handler: () => {} },
]

function MyMiniProfile() {
  const [isShowProfile, setIsShowProfile] = useState(false)

  const myUserData = useSelector(selectUser)

  return (
    <MiniProfile
      buttons={profileButtons}
      userData={myUserData}
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
