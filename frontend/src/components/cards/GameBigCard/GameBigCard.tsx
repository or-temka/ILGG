import { Link } from 'react-router-dom'

import CardImageText from '../CardImageText/CardImageText'
import Tooltip, {
  VerticalDirection,
} from 'components/UI/tooltips/Tooltip/Tooltip'
import styles from './GameBigCard.module.scss'
import { GameBigCardProps } from './interfaces'

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
        {newGame && (
          <Tooltip
            className={styles.card__isNewGame}
            postitionVertical={VerticalDirection.bottom}
            text="Игра вышла недавно"
          >
            New
          </Tooltip>
        )}
      </div>
    </Link>
  )
}

export default GameBigCard
