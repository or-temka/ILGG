import { Link } from 'react-router-dom'

import styles from './ButtonPage.module.scss'

function ButtonPage({
  name = '',
  svgComponent,
  active = false,
  notificationsCount = 0,
  to = '/',
  className,
  ...params
}) {
  return (
    <Link
      {...params}
      className={[
        styles.button,
        active ? styles.button_active : '',
        className,
      ].join(' ')}
    >
      <div
        className={[
          styles.button__decorLine,
          active ? styles.button__decorLine_show : '',
        ].join(' ')}
      ></div>
      <div className={styles.button__icon}>{svgComponent}</div>
      <span className={styles.button__name}>{name}</span>
      {notificationsCount > 0 && (
        <span className={styles.button__notificationsCount}>
          {notificationsCount}
        </span>
      )}
    </Link>
  )
}

export default ButtonPage
