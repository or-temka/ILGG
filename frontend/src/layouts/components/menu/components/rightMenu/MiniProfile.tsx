import { ReactNode, useState } from 'react'
import styles from './MiniProfile.module.scss'

export interface Button {
  title: string
  handler: (...args: any[]) => any
}

export interface UserData {
  name: string
  login: string
  isOnline: boolean
  imgName: string
}

interface MiniProfileProps {
  buttons: Button[] | []
  userData: UserData
  loading?: boolean
  iconComponent?: ReactNode
  onClickProfile?: (showProfile: boolean) => any
  classNames?: {
    wrapper?: string
    username?: string
    img?: string
    onlineStatus?: string
    menu?: string
    button?: string
  }
}

function MiniProfile({
  userData,
  buttons,
  loading = false,
  iconComponent,
  onClickProfile = () => {},
  classNames = {},
}: MiniProfileProps) {
  const [showButtons, setShowButtons] = useState<boolean>(false)

  const onClickProfileHandler = () => {
    setShowButtons(!showButtons)
    onClickProfile(!showButtons)
  }

  return (
    <div className={[styles.profile, classNames.wrapper].join(' ')}>
      <div className={styles.profile__profile} onClick={onClickProfileHandler}>
        <div className={styles.aboutUser}>
          {loading ? (
            <div
              className={['pulse-light', styles.aboutUser__image_skeleton].join(
                ' '
              )}
            ></div>
          ) : (
            <img
              src={require('../../../../../assets/images/profiles/' +
                userData.imgName)}
              alt={userData.login}
              className={[styles.aboutUser__image, classNames.img].join(' ')}
            ></img>
          )}

          <div className={styles.aboutUser__info}>
            {loading ? (
              <>
                <span
                  className={[
                    'pulse-light',
                    styles.aboutUser__name_skeleton,
                  ].join(' ')}
                ></span>
                <span
                  className={[
                    'pulse-light',
                    styles.aboutUser__onlineStatus_skeleton,
                  ].join(' ')}
                ></span>
              </>
            ) : (
              <>
                <span
                  className={[styles.aboutUser__name, classNames.username].join(
                    ' '
                  )}
                >
                  {userData.name}
                </span>
                <span
                  className={[
                    styles.aboutUser__onlineStatus,
                    classNames.onlineStatus,
                    userData.isOnline
                      ? styles.aboutUser__onlineStatus_online
                      : '',
                  ].join(' ')}
                >
                  {userData.isOnline ? 'В сети' : 'Не в сети'}
                </span>
              </>
            )}
          </div>
        </div>

        <div className={styles.profile__icon}>{iconComponent}</div>
      </div>
      <div
        className={[styles.menu, classNames.menu].join(' ')}
        style={{ height: showButtons ? buttons.length * 42 + 'px' : '0px' }}
      >
        {buttons.map((button, index) => (
          <div
            key={index}
            className={[styles.menu__button, classNames.button].join(' ')}
            onClick={button.handler}
          >
            {button.title}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MiniProfile
