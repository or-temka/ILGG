import ButtonPage from './components/leftMenu/ButtonPage'

import { ReactComponent as HomeSVG } from '../../../assets/svgs/home.svg'
import { ReactComponent as GamepadSVG } from '../../../assets/svgs/gamepad.svg'
import { ReactComponent as LibrarySVG } from '../../../assets/svgs/library.svg'
import { ReactComponent as DiamondSVG } from '../../../assets/svgs/diamond.svg'
import { ReactComponent as PackageSVG } from '../../../assets/svgs/package.svg'
import { ReactComponent as PeopleSVG } from '../../../assets/svgs/people.svg'
import { ReactComponent as HelpSVG } from '../../../assets/svgs/help.svg'

import menuStyles from './Menu.module.scss'
import styles from './LeftMenu.module.scss'
import { Link } from 'react-router-dom'

interface LeftMenuProps {
  className?: string
}

function LeftMenu({ className = '' }: LeftMenuProps) {
  return (
    <aside className={[menuStyles.menu, styles.leftMenu, className].join(' ')}>
      <nav className={styles.nav}>
        <ButtonPage name="Главная страница" svgComponent={<HomeSVG />} active />
        <ButtonPage name="Магазин" svgComponent={<GamepadSVG />} />
        <ButtonPage
          name="Библиотека"
          svgComponent={<LibrarySVG />}
          notificationsCount={3}
        />
        <ButtonPage name="Инвентарь" svgComponent={<DiamondSVG />} />
        <ButtonPage name="Торговая площадка" svgComponent={<PackageSVG />} />
        <ButtonPage name="Друзья" svgComponent={<PeopleSVG />} />
        <ButtonPage name="Помощь" svgComponent={<HelpSVG />} />
      </nav>
      <footer className={styles.footer}>
        <Link to="/" className={styles.footer__link}>
          Правовая информация
        </Link>
        <Link to="/" className={styles.footer__link}>
          Политика конфиденциальности
        </Link>
        <span className={styles.footer__text}>©2024 Щегорцов А.М.</span>
      </footer>
    </aside>
  )
}

export default LeftMenu
