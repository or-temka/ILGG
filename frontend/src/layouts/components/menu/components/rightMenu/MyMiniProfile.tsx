import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { IMyProfile } from '../../../../../interfaces/myProfile'

import MiniProfile, { Button } from './MiniProfile'
import { ReactComponent as ArrowSVG } from '../../../../../assets/svgs/arrow.svg'

import styles from './MyMiniProfile.module.scss'
import pageLink from '../../../../../pagesLinks'

interface MyMiniProfileProps {
  myUserData: IMyProfile | null
}

function MyMiniProfile({ myUserData }: MyMiniProfileProps) {
  const navigate = useNavigate()

  const profileButtons: Button[] = [
    {
      title: 'Мой профиль',
      handler: () => navigate(pageLink.profile + myUserData?._id),
    },
    { title: 'Настройки профиля', handler: () => {} },
    { title: 'Выйти', handler: () => {} },
  ]

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
