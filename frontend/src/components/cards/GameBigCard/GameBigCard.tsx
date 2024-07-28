import { Link } from 'react-router-dom'

import { GameBigCardProps } from './interfaces'
import { CardImageText } from '../cards'
import { Tooltip, tooltipVerticalDirection } from 'components'
import styles from './GameBigCard.module.scss'

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
            postitionVertical={tooltipVerticalDirection.bottom}
            text="Игра вышла недавно"
          >
            New
          </Tooltip>
        )}
      </div>
    </Link>
  )
}

export { GameBigCard }
