import menuStyles from './Menu.module.scss'
import styles from './LeftMenu.module.scss'

function LeftMenu({ className, ...params }) {
  return (
    <aside
      {...params}
      className={[menuStyles.menu, styles.leftMenu, className].join(' ')}
    >
      Левая часть с меню
    </aside>
  )
}

export default LeftMenu
