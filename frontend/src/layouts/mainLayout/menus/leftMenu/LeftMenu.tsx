import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectMyUser } from '../../../../redux/slices/myProfileSlice'
import ButtonPage from './components/ButtonPage'
import pageLink from 'pagesLinks'
import menuStyles from '../Menu.module.scss'
import Tooltip, {
  HorizontalDirection,
  VerticalDirection,
} from 'components/UI/tooltips/Tooltip'
import changeSiteTheme from 'utils/changeSiteTheme'
import SkeletonText, {
  SkeletonTextVariant,
} from 'components/skeletons/SkeletonText'

import { ReactComponent as HomeSVG } from 'assets/svgs/home.svg'
import { ReactComponent as GamepadSVG } from 'assets/svgs/gamepad.svg'
import { ReactComponent as LibrarySVG } from 'assets/svgs/library.svg'
import { ReactComponent as DiamondSVG } from 'assets/svgs/diamond.svg'
import { ReactComponent as PackageSVG } from 'assets/svgs/package.svg'
import { ReactComponent as PeopleSVG } from 'assets/svgs/people.svg'
import { ReactComponent as HelpSVG } from 'assets/svgs/help.svg'
import styles from './LeftMenu.module.scss'

interface LeftMenuProps {
  className?: string
}

function LeftMenu({ className = '' }: LeftMenuProps) {
  const location = useLocation().pathname

  const mySelectedUser = useSelector(selectMyUser)
  const notLogIn = !mySelectedUser.loading && mySelectedUser.data === null

  if (mySelectedUser.loading) {
    return (
      <aside
        className={[menuStyles.menu, styles.leftMenu, className].join(' ')}
      >
        <nav className={styles.nav}>
          {[0, 0, 0, 0, 0].map((_, index) => (
            <div key={index} className={styles.nav__loadingMenuBtn}>
              <div
                className={['pulse-light', styles.nav__loadingMenuBtnIcon].join(
                  ' '
                )}
              />
              <SkeletonText variant={SkeletonTextVariant.light} />
            </div>
          ))}
        </nav>
        <footer className={styles.footer}>
          <div className={styles.footer__changeTheme}>
            <Tooltip
              postitionVertical={VerticalDirection.top}
              postitionHorizontal={HorizontalDirection.right}
              text="Сменить тему оформления сайта"
            >
              <div className={styles.changeThemeBtn} onClick={changeSiteTheme}>
                <div className={styles.changeThemeBtn__firstColor} />
                <div className={styles.changeThemeBtn__secondColor} />
              </div>
            </Tooltip>
          </div>

          <Link to={pageLink.legal} className={styles.footer__link}>
            Правовая информация
          </Link>
          <Link to={pageLink.privacy} className={styles.footer__link}>
            Политика конфиденциальности
          </Link>
          <span className={styles.footer__text}>©2024 Щегорцов А.М.</span>
        </footer>
      </aside>
    )
  }

  return (
    <aside className={[menuStyles.menu, styles.leftMenu, className].join(' ')}>
      <nav className={styles.nav}>
        <ButtonPage
          name="Главная страница"
          to={pageLink.main}
          svgComponent={<HomeSVG />}
          active={location === pageLink.main}
        />
        <ButtonPage
          name="Магазин"
          to={pageLink.shop}
          svgComponent={<GamepadSVG />}
          active={location === pageLink.shop}
        />
        {!notLogIn && (
          <>
            <ButtonPage
              name="Библиотека"
              to={pageLink.appsLibrary}
              svgComponent={<LibrarySVG />}
              active={location === pageLink.appsLibrary}
              notificationsCount={3}
            />
            <ButtonPage
              name="Инвентарь"
              to={pageLink.inventory}
              svgComponent={<DiamondSVG />}
              active={location === pageLink.inventory}
            />
          </>
        )}
        <ButtonPage
          name="Торговая площадка"
          to={pageLink.marketplace}
          svgComponent={<PackageSVG />}
          active={location === pageLink.marketplace}
        />
        {!notLogIn && (
          <ButtonPage
            name="Друзья"
            to={pageLink.friends}
            svgComponent={<PeopleSVG />}
            active={location === pageLink.friends}
          />
        )}
        <ButtonPage
          name="Помощь"
          to={pageLink.help}
          svgComponent={<HelpSVG />}
          active={location === pageLink.help}
        />
      </nav>
      <footer className={styles.footer}>
        <div className={styles.footer__changeTheme}>
          <Tooltip
            postitionVertical={VerticalDirection.top}
            postitionHorizontal={HorizontalDirection.right}
            text="Сменить тему оформления сайта"
          >
            <div className={styles.changeThemeBtn} onClick={changeSiteTheme}>
              <div className={styles.changeThemeBtn__firstColor} />
              <div className={styles.changeThemeBtn__secondColor} />
            </div>
          </Tooltip>
        </div>

        <Link to={pageLink.legal} className={styles.footer__link}>
          Правовая информация
        </Link>
        <Link to={pageLink.privacy} className={styles.footer__link}>
          Политика конфиденциальности
        </Link>
        <span className={styles.footer__text}>©2024 Щегорцов А.М.</span>
      </footer>
    </aside>
  )
}

export default LeftMenu
