import miniProfileStyle from '../components/miniProfile/MiniProfile.module.scss'
import styles from './LoadingRightMenu.module.scss'

const LoadingUser = () => {
  return (
    <div className={[miniProfileStyle.aboutUser, styles.loadUser].join(' ')}>
      <div
        className={[
          'pulse-light',
          miniProfileStyle.aboutUser__image_skeleton,
        ].join(' ')}
      ></div>
      <div className={miniProfileStyle.aboutUser__info}>
        <span
          className={[
            'pulse-light',
            miniProfileStyle.aboutUser__name_skeleton,
          ].join(' ')}
        ></span>
        <span
          className={[
            'pulse-light',
            miniProfileStyle.aboutUser__onlineStatus_skeleton,
          ].join(' ')}
        ></span>
      </div>
    </div>
  )
}

function LoadingRightMenu() {
  return (
    <>
      <LoadingUser />

      <div className={styles.menu__friendsLabel}>
        <span className={styles.menu__friendsLabelText}>Друзья</span>
      </div>

      <LoadingUser />
      <LoadingUser />
      <LoadingUser />
      <LoadingUser />
    </>
  )
}

export default LoadingRightMenu
