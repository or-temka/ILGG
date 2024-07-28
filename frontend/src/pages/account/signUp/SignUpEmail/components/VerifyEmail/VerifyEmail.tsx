import { useNavigate } from 'react-router-dom'
import { useCallback, useState } from 'react'

import ImgEnvelope from 'assets/images/posters/email-envelope.png'
import RepeatButton from './RepeatButton/RepeatButton'
import pageLink from 'pagesLinks'
import { useForm } from 'react-hook-form'
import { VerifyEmailForm, VerifyEmailProps } from './interfaces'
import Regex from 'utils/regex'
import { useImagePreloader, useNotificationPanel } from 'hooks'
import {
  Button,
  buttonVariant,
  floatingNotificationVariant,
  Input,
  LoadingPopUp,
  PopUpContainer,
} from 'components'
import { AuthService } from 'services'
import styles from './VerifyEmail.module.scss'

const preloadSrcList: string[] = [ImgEnvelope]

function VerifyEmail({ onClose, email }: VerifyEmailProps) {
  const { register, handleSubmit, watch } = useForm<VerifyEmailForm>({
    defaultValues: { code: '' },
    mode: 'onSubmit',
  })
  const navigate = useNavigate()
  const addNotificationErrorPanel = useNotificationPanel({
    variant: floatingNotificationVariant.error,
  })
  const addNotificationSuccessPanel = useNotificationPanel({
    variant: floatingNotificationVariant.success,
  })
  const { imagesPreloaded } = useImagePreloader(preloadSrcList)
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)

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

  const onSubmit = useCallback(async () => {
    setIsSendBtnLoading(true)
    await AuthService.sendEmailActivationCode(email, watch('code'))
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
      .finally(() => setIsSendBtnLoading(false))
  }, [email, addNotificationErrorPanel, navigate, watch])

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
          <form
            className={styles.modal__confirmCodeField}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              register={register('code', {
                pattern: {
                  value: Regex.verifyCode,
                  message: 'Код должен состоять из 6 чисел',
                },
              })}
              placeholder="Код подтверждения"
              classNames={{ wrapper: styles.modal__inputWrapper }}
            />
            {!watch('code').length ? (
              <RepeatButton onClick={onClickRepeatSendEmailHandler} />
            ) : (
              <Button
                type="submit"
                title="Подтвердить"
                variant={buttonVariant.primary}
                className={styles.modal__confirmEmailCodeBtn}
                disabled={watch('code').length !== 6 || isSendBtnLoading}
              />
            )}
          </form>

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
