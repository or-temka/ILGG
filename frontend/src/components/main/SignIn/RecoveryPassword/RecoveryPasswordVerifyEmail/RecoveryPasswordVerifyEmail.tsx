import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'

import ImgEnvelope from 'assets/images/posters/email-envelope.png'
import RepeatButton from 'pages/account/signUp/SignUpEmail/components/VerifyEmail/RepeatButton/RepeatButton'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import EnterNewPassword from './EnterNewPassword/EnterNewPassword'
import { useForm } from 'react-hook-form'
import { RecoveryPasswordVerifyEmailForm, VerifyEmailProps } from './interfaces'
import Validations from 'validations/validations'
import { useImagePreloader, useNotificationPanel } from 'hooks'
import { response } from 'models'
import {
  Button,
  buttonVariant,
  floatingNotificationVariant,
  Input,
  LoadingPopUp,
  PopUpContainer,
} from 'components'
import styles from './RecoveryPasswordVerifyEmail.module.scss'

const preloadSrcList: string[] = [ImgEnvelope]

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
    variant: floatingNotificationVariant.error,
  })
  const addNotificationSuccessPanel = useNotificationPanel({
    variant: floatingNotificationVariant.success,
  })
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  const [disabledSendBtn, setDisabledSendBtn] = useState(false)

  const [userChangePassData, setUserChangePassData] =
    useState<null | response.sendRecoveryActivationCodeResponse>(null)

  const onClickRepeatSendEmailHandler = useCallback(async () => {
    setDisabledSendBtn(true)
    await RecoveryPasswordService.repeatRecoveryByEmail(emailOrLogin)
      .then(() => {
        addNotificationSuccessPanel('Сообщение успешно отправлено!')
      })
      .catch((error: AxiosError<response.RecoveryEmailError>) => {
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
        .catch((error: AxiosError<response.RecoveryEmailError>) => {
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
                register={register(
                  'activationCode',
                  Validations.UseForm.Auth.activationCode
                )}
                placeholder="Код подтверждения"
                classNames={{ wrapper: styles.modal__inputWrapper }}
              />
              {!watch('activationCode').length ? (
                <RepeatButton onClick={onClickRepeatSendEmailHandler} />
              ) : (
                <Button
                  type="submit"
                  title="Подтвердить"
                  variant={buttonVariant.primary}
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
