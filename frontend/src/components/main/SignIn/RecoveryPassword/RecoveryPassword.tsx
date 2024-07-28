import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'

import RecoveryPasswordVerifyEmail from './RecoveryPasswordVerifyEmail/RecoveryPasswordVerifyEmail'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import { RecoveryPasswordForm, RecoveryPasswordProps } from './interfaces'
import { GenericUseFormValidation } from 'validations/useFormValidations/generic'
import { useNotificationPanel } from 'hooks'
import { response } from 'models'
import {
  Button,
  buttonVariant,
  floatingNotificationVariant,
  Input,
  PopUpContainer,
} from 'components'
import styles from './RecoveryPassword.module.scss'

function RecoveryPassword({ onClose, onCloseSignIn }: RecoveryPasswordProps) {
  const { register, handleSubmit, watch } = useForm<RecoveryPasswordForm>({})
  const addNotificationErrorPanel = useNotificationPanel({
    variant: floatingNotificationVariant.error,
  })
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)
  const [showVerifyEmail, setShowVerifyEmail] = useState(false)

  const onSubmit = useCallback(
    async (data: RecoveryPasswordForm) => {
      setIsDisabledSendBtn(true)
      await RecoveryPasswordService.recoveryByEmail(data.userLoginOrEmail)
        .then(() => setShowVerifyEmail(true))
        .catch((err: AxiosError<response.RecoveryEmailError>) => {
          const errMsg = err.response?.data.errorMsg
          if (err.response?.status === 409) {
            return setShowVerifyEmail(true)
          }
          addNotificationErrorPanel(errMsg || 'Произошла ошибка!')
        })
        .finally(() => setIsDisabledSendBtn(false))
    },
    [addNotificationErrorPanel, setShowVerifyEmail, setIsDisabledSendBtn]
  )

  return (
    <>
      <PopUpContainer onClose={() => onClose()}>
        <div className={styles.recovery}>
          <header className={styles.recovery__header}>
            <h3 className={styles.recovery__headerTitle}>
              Восстановление пароля
            </h3>
          </header>
          <main className={styles.recovery__main}>
            <p className={styles.recovery__aboutText}>
              Введите ваш Email-адрес или Логин от аккаунта. Вам на почту будет
              направлен код с подтверждением.
            </p>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <Input
                register={register('userLoginOrEmail', {
                  required: GenericUseFormValidation.required,
                })}
                classNames={{ wrapper: styles.form__inputWrapper }}
                placeholder="Введите ваш Email или логин"
                label="Email или логин:"
              />
              <Button
                type="submit"
                title="Подтвердить"
                variant={buttonVariant.primary}
                className={styles.form__sendBtn}
                disabled={isDisabledSendBtn || !watch('userLoginOrEmail')}
              />
            </form>
          </main>
        </div>
      </PopUpContainer>

      {showVerifyEmail && (
        <RecoveryPasswordVerifyEmail
          onClose={() => setShowVerifyEmail(false)}
          emailOrLogin={watch('userLoginOrEmail')}
          onCloseSignIn={onCloseSignIn}
        />
      )}
    </>
  )
}

export default RecoveryPassword
