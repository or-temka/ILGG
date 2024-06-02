import { MongoId } from '@shared/interfaces/main'

import styles from './AppInList.module.scss'

interface AppInListProps {
  appData: {
    _id: MongoId
    name: string
    imgSrc: string
  }
  classNames?: {
    wrapper?: string
  }
}

function AppInList({ appData, classNames }: AppInListProps) {
  return (
    <div className={[styles.app, classNames?.wrapper].join(' ')}>
      <img
        src={require(`../../../../assets/images/applications/${appData.imgSrc}`)}
        className={styles.app__img}
      />
      <span className={styles.app__name}>{appData.name}</span>
    </div>
  )
}

export default AppInList
