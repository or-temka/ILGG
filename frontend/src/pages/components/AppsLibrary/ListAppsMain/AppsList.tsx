import styles from './AppsList.module.scss'

interface AppsListProps {
  classNames?: {
    wrapper?: string
  }
}

function AppsList({ classNames }: AppsListProps) {
  return <div className={[styles.list, classNames?.wrapper].join(' ')}></div>
}

export default AppsList
