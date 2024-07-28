import CardImageTextSkeleton from '../skeletons/CardImageTextSkeleton'
import styles from '../GameBigCard/GameBigCard.module.scss'

function GameBigCard() {
  return (
    <div className={[styles.card, styles.cardSkeleton].join(' ')}>
      <CardImageTextSkeleton />
      <div
        className={[
          styles.card__nameContainer,
          'pulse',
          styles.cardSkeleton__nameContainer,
        ].join(' ')}
      ></div>
    </div>
  )
}

export default GameBigCard
