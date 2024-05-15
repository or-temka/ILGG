import { Link } from 'react-router-dom'

import styles from './GameBigCard.module.scss'
import CardImageText from './CardImageText'

interface GameBigCardProps {
  name: string
  imgSrc: string
  aboutGame: string
  to: string
  alt?: string
}

function GameBigCard({ name, imgSrc, aboutGame, to, alt }: GameBigCardProps) {
  return (
    <Link to={to} className={styles.card}>
      <CardImageText imgSrc={imgSrc} alt={alt} text={aboutGame} />
      <h3 className={styles.card__name}>{name}</h3>
    </Link>
  )
}

export default GameBigCard
