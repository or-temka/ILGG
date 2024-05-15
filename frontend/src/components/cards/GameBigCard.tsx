import { Link } from 'react-router-dom'

import styles from './GameBigCard.module.scss'
import CardImageText from './CardImageText'

interface GameBigCardProps {
  name: string
  imgSrc: string
  aboutGame: string
  to: string
  alt?: string
  newGame?: boolean
}

function GameBigCard({
  name,
  imgSrc,
  aboutGame,
  to,
  alt,
  newGame,
}: GameBigCardProps) {
  return (
    <Link to={to} className={styles.card}>
      <CardImageText imgSrc={imgSrc} alt={alt} text={aboutGame} />
      <div className={styles.card__nameContainer}>
        <h3 className={styles.card__name}>{name}</h3>
        {newGame && <span className={styles.card__isNewGame}>New</span>}
      </div>
    </Link>
  )
}

export default GameBigCard
