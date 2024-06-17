import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'

import useImagePreloader from 'hooks/useImagePreloader'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer/PopUpContainer'
import LoadingPopUp from 'components/UI/loaders/LoadingPopUp/LoadingPopUp'
import ImgEnvelope from 'assets/images/posters/email-envelope.png'
import Input from 'components/UI/inputs/Input/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import RepeatButton from 'pages/account/signUp/SignUpEmail/VerifyEmail/RepeatButton/RepeatButton'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import {
  RecoveryEmailError,
  sendRecoveryActivationCodeResponse,
} from 'models/response/RecoveryPasswordResponse'
import EnterNewPassword from './EnterNewPassword/EnterNewPassword'

import styles from './RecoveryPasswordVerifyEmail.module.scss'

const preloadSrcList: string[] = [ImgEnvelope]

interface VerifyEmailProps {
  onClose: Function
  emailOrLogin: string
  onCloseSignIn: Function
}

function RecoveryPasswordVerifyEmail({
  onClose,
  emailOrLogin,
  onCloseSignIn,
}: VerifyEmailProps) {
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

  const [userChangePassData, setUserChangePassData] =
    useState<null | sendRecoveryActivationCodeResponse>(null)

  const onClickRepeatSendEmailHandler = useCallback(async () => {
    setDisabledSendBtn(true)
    await RecoveryPasswordService.repeatRecoveryByEmail(emailOrLogin)
      .then(() => {
        addNotificationSuccessPanel('Сообщение успешно отправлено!')
      })
      .catch((error: AxiosError<RecoveryEmailError>) => {
        const errorMsg = error?.response?.data.errorMsg
        addNotificationErrorPanel(errorMsg || 'Произошла ошибка!')
      })
      .finally(() => {
        setDisabledSendBtn(false)
      })
  }, [emailOrLogin, addNotificationErrorPanel, addNotificationSuccessPanel])

  const onClickSendCodeHandler = useCallback(async () => {
    setDisabledSendBtn(true)
    await RecoveryPasswordService.sendRecoveryActivationCode(
      emailOrLogin,
      codeValue
    )
      .then((res) => {
        const data = res.data
        setUserChangePassData({
          email: data.email,
          activationLink: data.activationLink,
        })
      })
      .catch((error: AxiosError<RecoveryEmailError>) => {
        const errorMsg = error?.response?.data.errorMsg
        addNotificationErrorPanel(errorMsg || 'Произошла ошибка!')
      })
      .finally(() => setDisabledSendBtn(false))
  }, [emailOrLogin, codeValue, navigate, addNotificationErrorPanel])

  if (!imagesPreloaded) {
    return <LoadingPopUp />
  }

  return (
    <>
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
        </div>
      </PopUpContainer>

      {userChangePassData && (
        <EnterNewPassword
          email={userChangePassData.email}
          activationLink={userChangePassData.activationLink}
          onClose={() => setUserChangePassData(null)}
          onCloseSingIn={onCloseSignIn}
        />
      )}
    </>
  )
}

export default RecoveryPasswordVerifyEmail
