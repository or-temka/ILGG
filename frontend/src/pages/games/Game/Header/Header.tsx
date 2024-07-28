import GameControlButtons from './GameContolButtons/GameControlButtons'
import GamePhotoLibrary from './GamePhotoLibrary/GamePhotoLibrary'
import HeaderAboutGame from './HeaderAboutGame/HeaderAboutGame'
import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={[styles.header__content, styles.content].join(' ')}>
        <div className={styles.content__header}>
          <h2 className={styles.content__label}>Find Number</h2>
        </div>
        <div className={styles.content__mainInfo}>
          <div className={styles.content__photoLibrary}>
            <GamePhotoLibrary />
          </div>
          <div className={styles.content__control}>
            <div className={styles.content__aboutGame}>
              <HeaderAboutGame />
            </div>
            <div className={styles.content__cotrolButtons}>
              <GameControlButtons />
            </div>
          </div>
        </div>
      </div>
      <div className={[styles.header__background, styles.background].join(' ')}>
        <div className={styles.background__gradient} />
        <img
          src={require('assets/images/applications/find-number/large-poster.jpg')}
          className={styles.background__img}
        />
      </div>
    </header>
  )
}

export default Header
