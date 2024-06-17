import ImgLightRightContnent from 'components/cards/ImgLightRightContent/ImgLightRightContnent'

import styles from './UserGames.module.scss'

function UserGames() {
  return (
    <div className={styles.userGames}>
      <h3 className={styles.userGames__label}>Игры пользователя</h3>

      <ImgLightRightContnent
        img={{
          src: require('assets/images/applications/find-number/large-poster.jpg'),
        }}
        classNames={{
          wrapper: styles.gameCard,
          img: styles.gameCard__img,
          content: styles.gameCard__content,
        }}
      >
        <h4 className={styles.gameCard__name}>Find Number</h4>
        <div className={styles.gameCard__infoContainer}>
          <span className={styles.gameCard__info}>Сыграно 107 ч.</span>
          <span className={styles.gameCard__info}>
            Последний запуск 2 марта
          </span>
        </div>
      </ImgLightRightContnent>

      <div className={styles.userGames__moreBtnContainer}>
        <span className={styles.userGames__moreBtn}>Показать ещё (12)...</span>
      </div>
    </div>
  )
}

export default UserGames
