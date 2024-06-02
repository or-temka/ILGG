import DescriptionList from '../../../../../components/UI/texts/DescriptionList'
import styles from './HeaderAboutGame.module.scss'

function HeaderAboutGame() {
  return (
    <div className={styles.about}>
      <div className={styles.about__item}>
        <p className={styles.about__paragraph}>
          Компьютерная игра в жанре action-adventure со структурой открытого
          мира, разработанная студией Ubisoft Montreal при поддержке Ubisoft для
          платформ PlayStation 4, Xbox One и персональных компьютеров.
        </p>
      </div>
      <div className={styles.about__item}>
        <DescriptionList
          descs={[
            {
              term: 'Дата выхода',
              definition: '24.02.2002',
            },
            {
              term: 'Разработчик',
              definition: 'ILGG',
              onClickDefinition: () => {},
            },
          ]}
        />
      </div>
    </div>
  )
}

export default HeaderAboutGame
