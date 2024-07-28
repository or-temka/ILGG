import { AppInListProps } from './interfaces'
import styles from './AppInList.module.scss'

function AppInList({ appData, classNames }: AppInListProps) {
  return (
    <div className={[styles.app, classNames?.wrapper].join(' ')}>
      <img
        src={require(`assets/images/applications/${appData.imgSrc}`)}
        className={styles.app__img}
      />
      <span className={styles.app__name}>{appData.name}</span>
    </div>
  )
}

export default AppInList
