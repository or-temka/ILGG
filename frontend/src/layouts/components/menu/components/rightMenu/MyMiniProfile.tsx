import { useState } from 'react'

import { IMyProfile } from '../../../../../interfaces/myProfile'

import MiniProfile, { Button } from './MiniProfile'
import { ReactComponent as ArrowSVG } from '../../../../../assets/svgs/arrow.svg'

import styles from './MyMiniProfile.module.scss'

const profileButtons: Button[] = [
  { title: 'Мой профиль', handler: () => {} },
  { title: 'Настройки профиля', handler: () => {} },
  { title: 'Выйти', handler: () => {} },
]

interface MyMiniProfileProps {
  myUserData: IMyProfile | null
}

function MyMiniProfile({ myUserData }: MyMiniProfileProps) {
  const [isShowProfile, setIsShowProfile] = useState(false)

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
