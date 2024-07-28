import {
  Button,
  buttonVariant,
  PopUpSkeleton,
  popUpVerticalPosition,
} from 'components'
import { CookiesAcceptProps } from './interfaces'
import styles from './CookiesAccept.module.scss'

function CookiesAccept({ onClose }: CookiesAcceptProps) {
  const onAcceptHandler = () => {
    onClose()
    localStorage.setItem('cookiesAccepted', 'true')
  }

  return (
    <PopUpSkeleton
      showCloseButton={false}
      classNames={{ contentClassName: styles.popUp }}
      verticalPosition={popUpVerticalPosition.bottom}
      showBack={false}
    >
      <div className={styles.modal}>
        <span className={styles.modal__text}>
          🍪 Мы используем файлы cookie, чтобы улучшить работу сайта. Дальнейшее
          пребывание на сайте означает согласие с их применением.
        </span>
        <Button
          title="Принять и закрыть"
          className={styles.modal__btn}
          variant={buttonVariant.light}
          onClick={onAcceptHandler}
        />
      </div>
    </PopUpSkeleton>
  )
}

export default CookiesAccept
