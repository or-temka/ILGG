import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import Input from 'components/UI/inputs/Input/Input'
import Checkbox from 'components/UI/inputs/Checkbox/Checkbox'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import { setPageName } from 'utils/setPageName'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import AboutService from '../components/AboutService'
import VerifyEmail from './components/VerifyEmail/VerifyEmail'
import styles from '../SignUp.module.scss'
import { SignUpEmailForm } from './interfaces'
import onSubmit from './onSubmit'
import Validations from 'validations/validations'
import { useNotificationPanel } from 'hooks'

function SignUpEmail() {
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const [showEmailConfirmModal, setShowEmailConfirmModal] = useState(false)
  useEffect(() => {
    setPageName('Регистрация')
  }, [])

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<SignUpEmailForm>({ mode: 'onSubmit' })

  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })

  return (
    <>
      <div className={['wrapper', styles.signUp].join(' ')}>
        <div className={styles.signUp__headerLabel}>
          <h2 className={styles.signUp__labelText}>Регистрация</h2>
        </div>
        <div className={styles.signUp__content}>
          <div
            className={[styles.signUp__contentItem, styles.signUp__form].join(
              ' '
            )}
          >
            <div className={styles.signUp__formHint}>
              <span className={styles.signUp__formHintText}>
                Укажите ваш Email-адрес для регистрации нового аккаунта.
                <br /> Вам на почту будет направлено письмо с подтверждением.
              </span>
            </div>
            <form
              className={styles.form}
              onSubmit={handleSubmit((data) =>
                onSubmit(
                  data,
                  setError,
                  addNotificationErrorPanel,
                  setIsSendBtnLoading,
                  setShowEmailConfirmModal
                )
              )}
            >
              <Input
                register={register('email', Validations.UseForm.User.email)}
                label="E-mail:"
                placeholder="Введите ваш E-mail"
                errorText={errors.email?.message}
              />

              <Checkbox
                label="Даю согласие на обработку персональных данных"
                register={register('personalDataConsent', { required: true })}
                className={styles.form__checkbox}
              />
              <Button
                type="submit"
                title="Отправить письмо с подтверждением"
                disabled={isSendBtnLoading || !watch('personalDataConsent')}
                variant={ButtonVariant.primary}
                className={styles.form__createButton}
              />
            </form>
          </div>

          <AboutService classNames={{ wrapper: styles.signUp__contentItem }} />
        </div>
      </div>

      {/* Modals (Pop-ups) */}
      {showEmailConfirmModal && (
        <VerifyEmail
          onClose={() => setShowEmailConfirmModal(false)}
          email={watch('email')}
        />
      )}
    </>
  )
}

export default SignUpEmail
