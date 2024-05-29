import styles from './ListAppsMain.module.scss'

interface ListAppsMainProps {
  classNames?: {
    wrapper?: string
  }
}

function ListAppsMain({ classNames }: ListAppsMainProps) {
  return <div className={[styles.main, classNames?.wrapper].join(' ')}>
    
  </div>
}

export default ListAppsMain
