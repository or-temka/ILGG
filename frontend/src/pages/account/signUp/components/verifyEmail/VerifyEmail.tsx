import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'

import useImagePreloader from 'hooks/useImagePreloader'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp'
import ImgEnvelope from '../../../../../assets/images/posters/email-envelope.png'
import Input from 'components/UI/inputs/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'
import RepeatButton from './RepeatButton'
import AuthService from 'services/authService'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'
import pageLink from 'pagesLinks'

import styles from './VerifyEmail.module.scss'

const preloadSrcList: string[] = [ImgEnvelope]

interface VerifyEmailProps {
  onClose: Function
  email: string
}

function VerifyEmail({ onClose, email }: VerifyEmailProps) {
  const navigate = useNavigate()
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })
  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
  })
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  const [codeValue, setCodeValue] = useState('')
  const [disabledSendBtn, setDisabledSendBtn] = useState(false)

  const onClickRepeatSendEmailHandler = useCallback(async () => {
    await AuthService.repeatSendEmail(email)
      .then(() => {
        addNotificationSuccessPanel('Сообщение успешно отправлено!')
      })
      .catch((error) => {
        const data = error?.response?.data
        addNotificationErrorPanel(data?.errorMsg || 'Произошла ошибка!')
      })
  }, [email, addNotificationSuccessPanel, addNotificationErrorPanel])

  const onClickSendCodeHandler = useCallback(async () => {
    setDisabledSendBtn(true)
    await AuthService.sendEmailActivationCode(email, codeValue)
      .then((res) => {
        const activationLink = res.data.activationLink
        navigate(
          `${pageLink.signUp}?activationLink=${activationLink}&email=${email}`
        )
      })
      .catch((error) => {
        const data = error?.response?.data
        addNotificationErrorPanel(data?.errorMsg || 'Произошла ошибка!')
      })
      .finally(() => setDisabledSendBtn(false))
  }, [email, codeValue, addNotificationErrorPanel, navigate])

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
              <RepeatButton onClick={onClickRepeatSendEmailHandler} />
            ) : (
              <Button
                title="Подтвердить"
                variant={ButtonVariant.primary}
                className={styles.modal__confirmEmailCodeBtn}
                disabled={codeValue.length !== 6 || disabledSendBtn}
                onClick={onClickSendCodeHandler}
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
