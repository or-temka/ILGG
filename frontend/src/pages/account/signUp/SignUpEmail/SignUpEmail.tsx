import { useCallback, useEffect, useState } from 'react'

import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import Input from 'components/UI/inputs/Input'
import Checkbox from 'components/UI/inputs/Checkbox'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'
import { setPageName } from 'utils/setPageName'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'
import AboutService from '../components/AboutService'
import VerifyEmail from './VerifyEmail/VerifyEmail'
import AuthService from 'services/authService'

import styles from '../SignUp.module.scss'

function SignUpEmail() {
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })
  const [formData, setFormData] = useState({
    email: { value: '', error: '' },
    personalDataConsent: false,
    disabledSendButton: false,
  })
  const [showEmailConfirmModal, setShowEmailConfirmModal] = useState(false)

  useEffect(() => {
    setPageName('Регистрация')
  }, [])

  const changeSendButtonDisable = useCallback((disable = false) => {
    setFormData((prev) => ({
      ...prev,
      disabledSendButton: disable,
    }))
  }, [])

  const setFormDataField = useCallback(
    (field: string, changeEvent: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: { value: changeEvent.target.value, error: '' },
      }))
    },
    []
  )

  const onClickCreateAccountButton = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      changeSendButtonDisable(true)
      const userEmail = formData.email.value
      await AuthService.registrationEmail(userEmail)
        .then(() => setShowEmailConfirmModal(true))
        .catch((err) => {
          const data = err?.response?.data
          const status = err?.response?.status

          if (Array.isArray(data)) {
            const newInputs = new Set()
            data.map((wrongInput) => {
              const wrongInputPath: 'email' = wrongInput.path
              const newInputWithError = formData[wrongInputPath]
              newInputWithError.error = wrongInput.msg
              newInputs.add(newInputWithError)
            })
            setFormData((prev) => ({ ...prev, newInputs }))
          } else {
            if (status === 409) return setShowEmailConfirmModal(true)
            addNotificationErrorPanel(data?.errorMsg || 'Произошла ошибка!')
          }
        })
        .finally(() => {
          changeSendButtonDisable()
        })
    },
    [formData, addNotificationErrorPanel]
  )

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
            <form className={styles.form}>
              <Input
                label="E-mail:"
                placeholder="Введите ваш E-mail"
                value={formData.email.value}
                onChange={(e) => setFormDataField('email', e)}
                errorText={formData.email.error}
              />

              <Checkbox
                label="Даю согласие на обработку персональных данных"
                checked={formData.personalDataConsent}
                onChange={() =>
                  setFormData((prev) => ({
                    ...prev,
                    personalDataConsent: !formData.personalDataConsent,
                  }))
                }
                className={styles.form__checkbox}
              />
              <Button
                buttonType="submit"
                title="Отправить письмо с подтверждением"
                disabled={
                  !formData.personalDataConsent || formData.disabledSendButton
                }
                variant={ButtonVariant.primary}
                onClick={onClickCreateAccountButton}
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
          email={formData.email.value}
        />
      )}
    </>
  )
}

export default SignUpEmail
