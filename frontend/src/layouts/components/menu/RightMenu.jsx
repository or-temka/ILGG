import menuStyles from './Menu.module.scss'
import styles from './RightMenu.module.scss'

function RightMenu({ className, ...params }) {
  return (
    <aside
      {...params}
      className={[menuStyles.menu, styles.rightMenu, className].join(' ')}
    >
      Левая часть с меню
    </aside>
  )
}

export default RightMenu
