import { useState } from 'react'

import Input from 'components/UI/inputs/Input/Input'

import styles from './Header.module.scss'

interface HeaderProps {
  classNames?: {
    wrapper?: string
    label?: string
  }
}

function Header({ classNames }: HeaderProps) {
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className={[styles.header, classNames?.wrapper].join(' ')}>
      <h2 className={[styles.header__label, classNames?.label].join(' ')}>
        Магазин
      </h2>
      <Input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Введите название"
        classNames={{
          wrapper: styles.header__inputWrapper,
          input: styles.header__input,
        }}
      />
    </header>
  )
}

export default Header
