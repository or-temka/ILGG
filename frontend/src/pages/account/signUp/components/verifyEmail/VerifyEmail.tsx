import useImagePreloader from 'hooks/useImagePreloader'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import styles from './VerifyEmail.module.scss'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp'

import ImgEnvelope from 'assets/images/posters/email-envelope.png'
import Input from 'components/UI/inputs/Input'
import { useState } from 'react'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'
import RepeatButton from './RepeatButton'
import { useDispatch } from 'react-redux'
import AuthService from 'services/authService'
import {
  PanelVariant,
  addPanel,
} from '../../../../../redux/slices/floatingPanelsQueueSlice'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'

const preloadSrcList: string[] = [ImgEnvelope]

interface VerifyEmailProps {
  onClose: Function
  email: string
  confirmEmail: string
}

function VerifyEmail({ onClose, email, confirmEmail }: VerifyEmailProps) {
  const dispatch = useDispatch()
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  const [codeValue, setCodeValue] = useState('')

  if (!imagesPreloaded) {
    return <LoadingPopUp />
  }

  const onClickRepeatSendEmailHandler = async () => {
    await AuthService.repeatSendEmail(email, confirmEmail)
      .then(() => {
        dispatch(
          addPanel({
            item: {
              type: PanelVariant.textNotification,
              variant: FloatingNotificationVariant.success,
              text: 'Сообщение успешно отправлено!',
            },
          })
        )
      })
      .catch((error) => {
        const data = error?.response?.data
        dispatch(
          addPanel({
            item: {
              type: PanelVariant.textNotification,
              variant: FloatingNotificationVariant.error,
              text: data?.errorMsg || 'Произошла ошибка!',
            },
          })
        )
      })
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
              <RepeatButton onClick={onClickRepeatSendEmailHandler} />
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
          Завершите регистрацию в течении 20 минут.
        </span>
      </div>
    </PopUpContainer>
  )
}

export default VerifyEmail
