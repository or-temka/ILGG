import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import ButtonWithIcon from 'components/UI/buttons/ButtonWithIcon/ButtonWithIcon'
import { ReactComponent as PlaySVG } from 'assets/svgs/play.svg'
import styles from './AppHeader.module.scss'
import { AppHeaderProps } from './interfaces'

function AppHeader({ classNames }: AppHeaderProps) {
  return (
    <header className={[styles.header, classNames?.wrapper].join(' ')}>
      <div className={styles.header__poster}>
        <img
          src={require('assets/images/applications/find-number/large-poster.jpg')}
          className={styles.header__posterImg}
        />
        <div className={styles.header__appNameContainer}>
          <span className={styles.header__appName}>Find Number</span>
        </div>
      </div>
      <div className={styles.header__content}>
        <div className={styles.header__mainInfo}>
          <ButtonWithIcon
            title="Запустить"
            iconSVG={<PlaySVG />}
            className={styles.header__playBtn}
          />
          <div className={styles.header__infoAboutApp}>
            <span className={styles.header__infoText}>Сыграно: 10 часов</span>
            <span className={styles.header__infoText}>
              Последний запуск: 10 марта
            </span>
          </div>
        </div>
        <Button title="Страница в магазине" variant={ButtonVariant.light} />
      </div>
    </header>
  )
}

export default AppHeader
