import Button from '../../../../components/UI/buttons/Button'
import { IFullUserProfile } from '../../../../interfaces/userProfile'

import styles from './Header.module.scss'

interface HeaderProps {
  userData: IFullUserProfile
}

function Header({ userData }: HeaderProps) {
  const profileImg = require('../../../../assets/images/profiles/large/profileImage.jpg')

  const progressLineWidthInProcent =
    (userData.level.points.now / userData.level.points.atLevel) * 100

  return (
    <header className={styles.header}>
      <img src={profileImg} className={styles.header__background}></img>

      <div className={styles.header__mainInfo}>
        <img
          src={profileImg}
          alt="Фото профиля"
          className={styles.header__userImg}
        />
        <div className={styles.header__textInfo}>
          <h2 className={styles.header__username}>{userData.name}</h2>
          <div className={styles.header__aboutUserInfo}>
            <p className={styles.header__aboutUserText}>{userData.aboutText}</p>
          </div>
        </div>
      </div>

      <div className={styles.header__adopt}>
        <div className={styles.header__lvlContainer}>
          <div className={styles.header__lvlInfo}>
            <span className={styles.header__lvlValue}>
              {userData.level.value} ур.
            </span>
            <span className={styles.header__lvlProgressText}>
              {userData.level.points.now}/{userData.level.points.atLevel}
            </span>
          </div>
          <div className={styles.header__lvlProgressLine}>
            <div
              className={styles.header__lvlProgressDoneLine}
              style={{ width: progressLineWidthInProcent + '%' }}
            ></div>
          </div>
        </div>
        <Button title="Редактировать профиль" />
      </div>
    </header>
  )
}

export default Header
