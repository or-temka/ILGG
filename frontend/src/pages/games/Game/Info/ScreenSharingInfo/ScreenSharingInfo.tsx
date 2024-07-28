import { ReactComponent as ScreenSharingSVG } from 'assets/svgs/screenSharing.svg'
import { ScreenSharingInfoProps } from './interfaces'
import { InfoTooltip } from 'components'
import styles from './ScreenSharingInfo.module.scss'

function ScreenSharingInfo({ classNames }: ScreenSharingInfoProps) {
  return (
    <div className={[styles.info, classNames?.wrapper].join(' ')}>
      <div className={styles.info__svgContainer}>
        <ScreenSharingSVG />
      </div>
      <div className={[styles.info__content, classNames?.content].join(' ')}>
        <div className={styles.info__header}>
          <span className={styles.info__label}>Общий экран</span>
          <InfoTooltip text="Приложение можно запустить на одном общем экране и всем остальным участникам (игрокам) зайти, к примеру, с телефона. Весь основной процесс игры будет происходить на общем экране, а взаимодействие с мобильного устройства." />
        </div>
        <div className={styles.info__main}>
          <p className={styles.info__textInfo}>
            Данное приложение поддерживает работу в общем экране.
          </p>
        </div>
      </div>
    </div>
  )
}

export default ScreenSharingInfo
