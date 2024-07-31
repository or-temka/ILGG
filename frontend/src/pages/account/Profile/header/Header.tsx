import { useNavigate } from 'react-router-dom'

import pageLink from 'pagesLinks'
import { HeaderProps } from './interfaces'
import { Button } from 'components'
import styles from './Header.module.scss'
import { API_IMAGES_URL } from 'variables'

function Header({ userData }: HeaderProps) {
  const navigate = useNavigate()

  const userAvatar = `${API_IMAGES_URL}/users/${userData._id}/profile/${userData.avatar?.filename}`

  const progressLineWidthInProcent =
    (userData.level.points.now / userData.level.points.atLevel) * 100

  return (
    <header className={styles.header}>
      <img
        src={userAvatar}
        className={styles.header__background}
        alt={`Аватар пользователя ${userData.name}`}
      ></img>

      <div className={styles.header__mainInfo}>
        <img
          src={userAvatar}
          alt="Фото профиля"
          className={styles.header__userImg}
        />
        <div className={styles.header__textInfo}>
          <h2 className={styles.header__username}>{userData.name}</h2>
          <div className={styles.header__aboutUserInfo}>
            <p className={styles.header__aboutUserText}>{userData.about}</p>
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
        <Button
          title="Редактировать профиль"
          onClick={() => navigate(pageLink.editProfile)}
        />
      </div>
    </header>
  )
}

export default Header
