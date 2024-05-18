import Button from '../../../../components/UI/buttons/Button'

import styles from './Header.module.scss'

function Header() {
  const profileImg = require('../../../../assets/images/profiles/large/profileImage.jpg')

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
          <h2 className={styles.header__username}>Приора</h2>
          <div className={styles.header__aboutUserInfo}>
            <p className={styles.header__aboutUserText}>
              Так давай запоем хоть толпой да хоть вдвоем
            </p>
            <p className={styles.header__aboutUserText}>
              Мой вконтакте: https://vk.com/sup
            </p>
          </div>
        </div>
      </div>

      <div className={styles.header__adopt}>
        <div className={styles.header__lvlContainer}>
          <div className={styles.header__lvlInfo}>
            <span className={styles.header__lvlValue}>74 ур.</span>
            <span className={styles.header__lvlProgressText}>146/1000</span>
          </div>
          <div className={styles.header__lvlProgressLine}>
            <div className={styles.header__lvlProgressDoneLine}></div>
          </div>
        </div>
        <Button title="Редактировать профиль" />
      </div>
    </header>
  )
}

export default Header
