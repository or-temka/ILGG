import styles from './AppHeader.module.scss'

interface AppHeaderProps {
  classNames?: {
    wrapper?: string
  }
}

function AppHeader({ classNames }: AppHeaderProps) {
  return (
    <header className={[styles.header, classNames?.wrapper].join(' ')}></header>
  )
}

export default AppHeader
