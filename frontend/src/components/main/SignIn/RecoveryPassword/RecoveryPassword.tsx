import { useCallback, useState } from 'react'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'

import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer/PopUpContainer'
import Input from 'components/UI/inputs/Input/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import RecoveryPasswordVerifyEmail from './RecoveryPasswordVerifyEmail/RecoveryPasswordVerifyEmail'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import { RecoveryEmailError } from 'models/response/RecoveryPasswordResponse'
import styles from './RecoveryPassword.module.scss'
import { RecoveryPasswordForm } from './interfaces'
import { GenericUseFormValidation } from 'validations/useFormValidations/generic'

interface RecoveryPasswordProps {
  onClose: Function
  onCloseSignIn: Function
}

function RecoveryPassword({ onClose, onCloseSignIn }: RecoveryPasswordProps) {
  const { register, handleSubmit, watch } = useForm<RecoveryPasswordForm>({})
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)
  const [showVerifyEmail, setShowVerifyEmail] = useState(false)

  const onSubmit = useCallback(
    async (data: RecoveryPasswordForm) => {
      setIsDisabledSendBtn(true)
      await RecoveryPasswordService.recoveryByEmail(data.userLoginOrEmail)
        .then(() => setShowVerifyEmail(true))
        .catch((err: AxiosError<RecoveryEmailError>) => {
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
                variant={ButtonVariant.primary}
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
