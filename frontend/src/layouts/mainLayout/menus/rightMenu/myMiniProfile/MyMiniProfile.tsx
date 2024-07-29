import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import MiniProfile from '../components/miniProfile/MiniProfile'
import pageLink from 'pagesLinks'
import logout from '../../../../../redux/slices/myProfile/thunks/logout'
import { ReactComponent as ArrowSVG } from 'assets/svgs/arrow.svg'
import { Button } from '../components/miniProfile/interfaces'
import { MyMiniProfileProps } from './interfaces'
import styles from './MyMiniProfile.module.scss'

function MyMiniProfile({ myUserData }: MyMiniProfileProps) {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const profileButtons: Button[] = [
    {
      title: 'Мой профиль',
      handler: () => navigate(pageLink.profile + myUserData?._id),
    },
    {
      title: 'Настройки профиля',
      handler: () => navigate(pageLink.editProfile),
    },
    {
      title: 'Выйти',
      handler: () => {
        dispatch<any>(logout())
      },
    },
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
