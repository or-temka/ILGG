import useImagePreloader from 'hooks/useImagePreloader'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import styles from './VerifyEmail.module.scss'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp'

import ImgEnvelope from 'assets/images/posters/email-envelope.png'

const preloadSrcList: string[] = [ImgEnvelope]

interface VerifyEmailProps {
  onClose: Function
}

function VerifyEmail({ onClose }: VerifyEmailProps) {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)

  if (!imagesPreloaded) {
    return <LoadingPopUp />
  }

  return (
    <PopUpContainer
      classNames={{ wrapperClassName: styles.modal }}
      onClose={() => onClose()}
    >
      <div className={styles.modal__content}>
        <span className={styles.modal__label}>Подтвердите ваш Email</span>
        <span className={styles.modal__hint}>
          Вам на почту было отправлено письмо с подтверждением. Почта
          потребуется в случае восстановления логина или пароля.
        </span>
        <img
          src={require('assets/images/posters/email-envelope.png')}
          alt="email envelope"
          className={styles.modal__envelopeImg}
        />
      </div>
    </PopUpContainer>
  )
}

export default VerifyEmail
