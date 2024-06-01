import styles from './Apps.module.scss'

interface AppsProps {
  classNames?: {
    wrapper?: string
  }
}

function Apps({ classNames }: AppsProps) {
  return <div className={[styles.apps, classNames?.wrapper].join(' ')}></div>
}

export default Apps
