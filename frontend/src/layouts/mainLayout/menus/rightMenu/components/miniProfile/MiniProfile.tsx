import { useState } from 'react'

import { MiniProfileProps } from './interfaces'
import { HoverableText } from 'components'
import styles from './MiniProfile.module.scss'

function MiniProfile({
  userData,
  buttons,
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
          {!userData ? (
            <div
              className={['pulse-light', styles.aboutUser__image_skeleton].join(
                ' '
              )}
            ></div>
          ) : (
            <img
              src={require('assets/images/profiles/alina.jpg')}
              alt={userData.login}
              className={[styles.aboutUser__image, classNames.img].join(' ')}
            ></img>
          )}

          <div className={styles.aboutUser__info}>
            {!userData ? (
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
                <HoverableText
                  defaultText={userData.name}
                  hoverText={userData.login}
                />

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
