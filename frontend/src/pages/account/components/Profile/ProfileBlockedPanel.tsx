import { ReactComponent as ProfileBlockedSVG } from '../../../../assets/svgs/profileBlocked.svg'
import InfoTooltip from '../../../../components/UI/tooltips/InfoTooltip'

import styles from './ProfileBlockedPanel.module.scss'

function ProfileBlockedPanel() {
  return (
    <div className={styles.panel}>
      <ProfileBlockedSVG />
      <div className={styles.panel__textInfo}>
        <div className={styles.panel__labelConatiner}>
          <span className={styles.panel__labelText}>Профиль заблокирован</span>
          <InfoTooltip text="Пользователь больше не сможет использовать свой аккаунт" />
        </div>
        <span className={styles.panel__text}>
          Пользователю закрыт доступ к площадке из-за нарушения правил сервиса
        </span>
      </div>
    </div>
  )
}

export default ProfileBlockedPanel
