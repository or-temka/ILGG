import { useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderSearchInput from './HeaderSearchInput'
import { ReactComponent as LogoSVG } from 'assets/svgs/logo.svg'
import AccountBalance from './AccountBalance'
import pageLink from 'pagesLinks'

import styles from './Header.module.scss'
import PopUpSkeleton, {
  PopUpVerticalPosition,
} from 'components/UI/popUps/skeletons/PopUpSkeleton/PopUpSkeleton'
import LeftMenu from '../menus/leftMenu/LeftMenu'
import RightMenu from '../menus/rightMenu/RightMenu'

interface HeaderProps {
  className?: string
}

function Header({ className }: HeaderProps) {
  const [searchValue, setSearchValue] = useState<string>('')
  const [showLaptopMenu, setShowLaptopMenu] = useState(false)

  return (
    <>
      <header className={[styles.header, className].join(' ')}>
        <div className={styles.header__aside}>
          <div
            className={styles.header__menuBurger}
            onClick={() => setShowLaptopMenu(true)}
          >
            <div className={styles.header__menuBurgerItem} />
            <div className={styles.header__menuBurgerItem} />
            <div className={styles.header__menuBurgerItem} />
          </div>
          <HeaderSearchInput
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.header__searchInput}
          />
        </div>
        <div className={styles.header__logoContainer}>
          <Link to={pageLink.main} className={styles.header__logo}>
            <LogoSVG />
          </Link>
        </div>
        <div className={styles.header__aside}>
          <AccountBalance className={styles.header__balance} />
        </div>
      </header>

      {showLaptopMenu && (
        <PopUpSkeleton
          showCloseButton={false}
          classNames={{
            className: styles.menu,
            contentClassName: styles.menu__popUpContent,
            backClassName: styles.menu__back
          }}
          verticalPosition={PopUpVerticalPosition.top}
          onClose={() => setShowLaptopMenu(false)}
        >
          <div className={styles.menu__content}>
            <div className={styles.menu__MenuContent}>
              <HeaderSearchInput />
              <LeftMenu className={styles.menu__left} />
            </div>
            <div className={styles.menu__MenuContent}>
              <AccountBalance className={styles.menu__balance} />
              <RightMenu className={styles.menu__right} />
            </div>
          </div>
        </PopUpSkeleton>
      )}
    </>
  )
}

export default Header
