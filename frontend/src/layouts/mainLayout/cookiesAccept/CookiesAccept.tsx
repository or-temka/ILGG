import PopUpSkeleton, {
  PopUpVerticalPosition,
} from 'components/UI/popUps/skeletons/PopUpSkeleton/PopUpSkeleton'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import styles from './CookiesAccept.module.scss'
import { CookiesAcceptProps } from './interfaces'

function CookiesAccept({ onClose }: CookiesAcceptProps) {
  const onAcceptHandler = () => {
    onClose()
    localStorage.setItem('cookiesAccepted', 'true')
  }

  return (
    <PopUpSkeleton
      showCloseButton={false}
      classNames={{ contentClassName: styles.popUp }}
      verticalPosition={PopUpVerticalPosition.bottom}
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
          variant={ButtonVariant.light}
          onClick={onAcceptHandler}
        />
      </div>
    </PopUpSkeleton>
  )
}

export default CookiesAccept
