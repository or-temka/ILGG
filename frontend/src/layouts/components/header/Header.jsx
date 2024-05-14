import { useState } from 'react'

import HeaderSearchInput from './HeaderSearchInput'
import { ReactComponent as LogoSVG } from '../../../assets/svgs/logo.svg'

import styles from './Header.module.scss'
import { Link } from 'react-router-dom'
import AccountBalance from './AccountBalance'

function Header() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className={styles.header}>
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
        <AccountBalance balanceValue="333" />
      </div>
    </header>
  )
}

export default Header
