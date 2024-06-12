import useImagePreloader from 'hooks/useImagePreloader'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import styles from './VerifyEmail.module.scss'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp'

import ImgEnvelope from 'assets/images/posters/email-envelope.png'
import Input from 'components/UI/inputs/Input'
import { useState } from 'react'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'
import RepeatButton from './RepeatButton'

const preloadSrcList: string[] = [ImgEnvelope]

interface VerifyEmailProps {
  onClose: Function
}

function VerifyEmail({ onClose }: VerifyEmailProps) {
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  const [codeValue, setCodeValue] = useState('')

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
          Вам на почту было отправлено письмо с подтверждением. Введите код с
          подтверждением в поле.
        </span>

        <div className={styles.modal__confirmField}>
          <div className={styles.modal__confirmCodeField}>
            <Input
              value={codeValue}
              onChange={(e) => setCodeValue(e.target.value)}
              placeholder="Код подтверждения"
              classNames={{ wrapper: styles.modal__inputWrapper }}
            />
            {!codeValue.length ? (
              <RepeatButton onClick={() => console.log(1)} />
            ) : (
              <Button
                title="Подтвердить"
                variant={ButtonVariant.primary}
                className={styles.modal__confirmEmailCodeBtn}
                disabled={codeValue.length !== 6}
              />
            )}
          </div>

          <img
            src={require('assets/images/posters/email-envelope.png')}
            alt="email envelope"
            className={styles.modal__envelopeImg}
          />
        </div>
        <span className={styles.modal__hint_warning}>
          завершите регистрацию в течении 20 минут.
        </span>
      </div>
    </PopUpContainer>
  )
}

export default VerifyEmail
