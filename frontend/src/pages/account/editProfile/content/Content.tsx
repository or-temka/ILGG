import MainInfoSettings from './components/MainInfoSettings/MainInfoSettings'
import PrivacySettings from './components/PrivacySettings/PrivacySettings'
import ProfileSettings from './components/ProfileSettings/ProfileSettings'

import styles from './Content.module.scss'

interface ContentProps {}

function Content({}: ContentProps) {
  return (
    <>
      <main className={styles.content}>
        <ProfileSettings />
        <MainInfoSettings />
        <PrivacySettings />
      </main>
    </>
  )
}

export default Content
