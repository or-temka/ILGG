import { useState } from 'react'

import { HeaderProps } from './interfaces'
import { Input } from 'components'
import styles from './Header.module.scss'

function Header({ classNames }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className={[styles.header, classNames?.wrapper].join(' ')}>
      <h2 className={styles.header__label}>Торговая площадка</h2>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Введите название"
        classNames={{
          wrapper: styles.header__searchInputWrapper,
          input: styles.header__searchInput,
        }}
      />
    </header>
  )
}

export default Header
