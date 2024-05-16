import { useState } from 'react'
import { Link } from 'react-router-dom'

import HeaderSearchInput from './HeaderSearchInput'
import { ReactComponent as LogoSVG } from '../../../assets/svgs/logo.svg'
import AccountBalance from './AccountBalance'

import styles from './Header.module.scss'

interface HeaderProps {
  className?: string
}

function Header({ className }: HeaderProps) {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <header className={[styles.header, className].join(' ')}>
      <div className={styles.header__aside}>
        <HeaderSearchInput
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className={styles.header__logoContainer}>
        <Link to="/" className={styles.header__logo}>
          <LogoSVG />
        </Link>
      </div>
      <div className={styles.header__aside}>
        <AccountBalance />
      </div>
    </header>
  )
}

export default Header
