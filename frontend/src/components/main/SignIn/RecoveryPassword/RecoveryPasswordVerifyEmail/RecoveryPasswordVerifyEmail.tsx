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
import RepeatButton from 'pages/account/signUp/SignUpEmail/components/VerifyEmail/RepeatButton/RepeatButton'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import {
  RecoveryEmailError,
  sendRecoveryActivationCodeResponse,
} from 'models/response/RecoveryPasswordResponse'
import EnterNewPassword from './EnterNewPassword/EnterNewPassword'
import styles from './RecoveryPasswordVerifyEmail.module.scss'
import { useForm } from 'react-hook-form'
import { RecoveryPasswordVerifyEmailForm } from './interfaces'
import Regex from 'utils/regex'

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
  const { register, handleSubmit, watch } =
    useForm<RecoveryPasswordVerifyEmailForm>({
      defaultValues: { activationCode: '' },
    })
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })
  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
  })
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
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

  const onSubmit = useCallback(
    async (data: RecoveryPasswordVerifyEmailForm) => {
      setDisabledSendBtn(true)
      await RecoveryPasswordService.sendRecoveryActivationCode(
        emailOrLogin,
        data.activationCode
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
    },
    [emailOrLogin, addNotificationErrorPanel]
  )

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
            <form
              className={styles.modal__confirmCodeField}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Input
                register={register('activationCode', {
                  required: {
                    value: true,
                    message: 'Поле обязательно для заполнения',
                  },
                  pattern: {
                    value: Regex.verifyCode,
                    message: 'Код должен состоять из 6 символов',
                  },
                })}
                placeholder="Код подтверждения"
                classNames={{ wrapper: styles.modal__inputWrapper }}
              />
              {!watch('activationCode').length ? (
                <RepeatButton onClick={onClickRepeatSendEmailHandler} />
              ) : (
                <Button
                  type="submit"
                  title="Подтвердить"
                  variant={ButtonVariant.primary}
                  className={styles.modal__confirmEmailCodeBtn}
                  disabled={
                    watch('activationCode').length !== 6 || disabledSendBtn
                  }
                />
              )}
            </form>

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
