import SkeletonText, {
  SkeletonTextVariant,
} from 'components/skeletons/SkeletonText/SkeletonText'
import styles from '../UserGames/UserGames.module.scss'

function UserGames() {
  const count = [1, 2, 3]

  return (
    <div className={styles.userGames}>
      <h3 className={styles.userGames__label}>Игры пользователя</h3>

      {count.map((_, index) => (
        <div key={index} className={styles.skeleton__card}>
          <div className={['pulse-light', styles.skeleton__img].join(' ')} />
          <div className={styles.skeleton__cardContent}>
            <span
              className={[
                'pulse-light',
                styles.gameCard__name,
                styles.skeleton__name,
              ].join(' ')}
            ></span>
            <div
              className={[
                styles.gameCard__infoContainer,
                styles.skeleton__infoContainer,
              ].join(' ')}
            >
              <SkeletonText variant={SkeletonTextVariant.light} />
              <SkeletonText variant={SkeletonTextVariant.light} />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UserGames
