import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Input from '../../../components/UI/inputs/Input'
import Checkbox from '../../../components/UI/inputs/Checkbox'
import Button, { ButtonVariant } from '../../../components/UI/buttons/Button'

import { setPageName } from 'utils/setPageName'
import {
  PanelVariant,
  addPanel,
} from '../../../redux/slices/floatingPanelsQueueSlice'

import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'
import AboutService from './components/AboutService'
import VerifyEmail from './components/verifyEmail/VerifyEmail'

import styles from './SignUp.module.scss'
import AuthService from 'services/authService'

function SignUpEmail() {
  const dispatch = useDispatch()

  useEffect(() => {
    setPageName('Регистрация')
  }, [])

  const [formData, setFormData] = useState({
    email: { value: 'tema.chegortzov@mail.ru', error: '' },
    confirmEmail: { value: 'tema.chegortzov@mail.ru', error: '' },
    personalDataConsent: false,
    disabledSendButton: false,
  })
  const [showEmailConfirmModal, setShowEmailConfirmModal] = useState(false)

  const changeSendButtonDisable = (disable = false) => {
    setFormData((prev) => ({
      ...prev,
      disabledSendButton: disable,
    }))
  }

  const setFormDataField = (
    field: string,
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: { value: changeEvent.target.value, error: '' },
    }))
  }

  const onCloseEmailConfirmHandler = () => {
    setShowEmailConfirmModal(false)
  }

  const onClickCreateAccountButton = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    changeSendButtonDisable(true)

    const emailData = {
      email: formData.email.value,
      confirmEmail: formData.confirmEmail.value,
    }

    await AuthService.registrationEmail(emailData.email, emailData.confirmEmail)
      .then((res) => {
        setShowEmailConfirmModal(true)
      })
      .catch((err) => {
        const data = err?.response?.data

        if (Array.isArray(data)) {
          const newInputs = new Set()
          data.map((wrongInput) => {
            const wrongInputPath: 'email' | 'confirmEmail' = wrongInput.path
            const newInputWithError = formData[wrongInputPath]
            newInputWithError.error = wrongInput.msg
            newInputs.add(newInputWithError)
          })
          setFormData((prev) => ({ ...prev, newInputs }))
        } else {
          dispatch(
            addPanel({
              item: {
                type: PanelVariant.textNotification,
                variant: FloatingNotificationVariant.error,
                text: data?.errorMsg || 'Произошла ошибка!',
              },
            })
          )
        }
      })
      .finally(() => {
        changeSendButtonDisable()
      })
  }

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

              <Input
                label="Подтвердите E-mail:"
                placeholder="Введите ваш E-mail ещё раз"
                value={formData.confirmEmail.value}
                onChange={(e) => setFormDataField('confirmEmail', e)}
                errorText={formData.confirmEmail.error}
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
        <VerifyEmail onClose={onCloseEmailConfirmHandler} />
      )}
    </>
  )
}

export default SignUpEmail
