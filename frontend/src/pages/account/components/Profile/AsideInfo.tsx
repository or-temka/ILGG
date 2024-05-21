import styles from './AsideInfo.module.scss'
import ProfileBlockedPanel from './ProfileBlockedPanel'

function AsideInfo() {
  return (
    <div className={['asideContent', styles.aside].join(' ')}>
      <ProfileBlockedPanel />
    </div>
  )
}

export default AsideInfo
