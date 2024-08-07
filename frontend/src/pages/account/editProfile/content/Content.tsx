import Avatar from './components/Avatar/Avatar'
import MainInfoSettings from './components/MainInfoSettings/MainInfoSettings'
import Password from './components/PasswordSettings/Password'
import PrivacySettings from './components/PrivacySettings/PrivacySettings'
import ProfileSettings from './components/ProfileSettings/ProfileSettings'
import { ContentProps } from './interfaces'
import styles from './Content.module.scss'

function Content({ contentType }: ContentProps) {
  return (
    <>
      <main className={styles.content}>
        {contentType === 'profile' ? (
          <ProfileSettings />
        ) : contentType === 'main' ? (
          <MainInfoSettings />
        ) : contentType === 'password' ? (
          <Password />
        ) : contentType === 'avatar' ? (
          <Avatar />
        ) : (
          <PrivacySettings />
        )}
      </main>
    </>
  )
}

export default Content
