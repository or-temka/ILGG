import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'

import { setPageName } from 'utils/setPageName'
import AboutService from '../components/AboutService'
import VerifyEmail from './components/VerifyEmail/VerifyEmail'
import { SignUpEmailForm } from './interfaces'
import onSubmit from './onSubmit'
import Validations from 'validations/validations'
import { useNotificationPanel } from 'hooks'
import {
  Button,
  buttonVariant,
  Checkbox,
  floatingNotificationVariant,
  Input,
} from 'components'
import styles from '../SignUp.module.scss'

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
    variant: floatingNotificationVariant.error,
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
                variant={buttonVariant.primary}
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
