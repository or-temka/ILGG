import ButtonWithIcon from 'components/UI/buttons/ButtonWithIcon/ButtonWithIcon'
import { ReactComponent as PlaySVG } from 'assets/svgs/play.svg'
import { ReactComponent as PlusSVG } from 'assets/svgs/plus.svg'
import styles from './GameControlButtons.module.scss'

function GameControlButtons() {
  return (
    <div className={styles.control}>
      <ButtonWithIcon
        title="Играть бесплатно"
        iconSVG={<PlaySVG />}
        onClick={() => {}}
        className={[styles.control__btn, styles.control__btn_play].join(' ')}
      />
      <ButtonWithIcon
        title="Добавить в библиотеку"
        iconSVG={<PlusSVG />}
        onClick={() => {}}
        className={[styles.control__btn, styles.control__btn_add].join(' ')}
      />
    </div>
  )
}

export default GameControlButtons
