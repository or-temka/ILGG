import menuStyles from './Menu.module.scss'
import styles from './RightMenu.module.scss'

interface RightMenuProps {
  className?: string
}

function RightMenu({ className = '' }: RightMenuProps) {
  return (
    <aside className={[menuStyles.menu, styles.rightMenu, className].join(' ')}>
      Левая часть с меню
    </aside>
  )
}

export default RightMenu
