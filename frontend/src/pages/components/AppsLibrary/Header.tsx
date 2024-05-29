import styles from './Header.module.scss'

interface HeaderProps {
  classNames?: {
    wrapper?: string
  }
}

function Header({ classNames }: HeaderProps) {
  return (
    <header className={[styles.header, classNames?.wrapper].join(' ')}></header>
  )
}

export default Header
