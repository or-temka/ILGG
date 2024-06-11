import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Input from '../../../components/UI/inputs/Input'
import Checkbox from '../../../components/UI/inputs/Checkbox'
import Button, { ButtonVariant } from '../../../components/UI/buttons/Button'
import InputWithBtnIcon from '../../../components/UI/inputs/InputWithBtnIcon'
import { ReactComponent as EyeSVG } from 'assets/svgs/eye.svg'

import { setPageName } from 'utils/setPageName'
import {
  PanelVariant,
  addPanel,
} from '../../../redux/slices/floatingPanelsQueueSlice'

import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'
import { registration } from '../../../redux/slices/myProfileSlice'
import AboutService from './components/AboutService'
import VerifyEmail from './components/verifyEmail/VerifyEmail'

import styles from './SignUp.module.scss'

function SignUp() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    setPageName('Регистрация')
  }, [])

  const [formData, setFormData] = useState({
    login: { value: '', error: '' },
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    personalDataConsent: false,
    disabledSendButton: false,
  })
  const [showEmailConfirmModal, setShowEmailConfirmModal] = useState(false)

  const changePasswordVisible = (elem: ParentNode | null) => {
    const input = elem?.querySelector('input')
    if (!input) return
    input.type = input?.type === 'password' ? 'text' : 'password'
  }

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
    navigate('/')
  }

  const onClickCreateAccountButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    changeSendButtonDisable(true)

    const userData = {
      name: formData.name.value,
      login: formData.login.value,
      password: formData.password.value,
      confirmPassword: formData.confirmPassword.value,
      email: formData.email.value,
    }

    dispatch<any>(registration(userData)).then((res: any) => {
      const requestStatus: 'rejected' | 'fulfilled' = res.meta.requestStatus
      const errorPayload = res.payload

      if (requestStatus === 'rejected') {
        if (Array.isArray(errorPayload)) {
          const newInputs = new Set()
          errorPayload.map((wrongInput) => {
            const wrongInputPath:
              | 'name'
              | 'login'
              | 'email'
              | 'password'
              | 'confirmPassword' = wrongInput.path
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
                text: errorPayload?.errorMsg || 'Произошла ошибка!',
              },
            })
          )
        }
      } else if (requestStatus === 'fulfilled') {
        setShowEmailConfirmModal(true)
      }

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
                Укажите ваши данные для регистрации нового аккаунта. Позже их
                можно будет изменить.
              </span>
            </div>
            <form className={styles.form}>
              <Input
                label="Логин: *"
                placeholder="Введите ваш логин"
                value={formData.login.value}
                onChange={(e) => setFormDataField('login', e)}
                errorText={formData.login.error}
              />
              <Input
                label="Никнейм: *"
                placeholder="Введите ваш никнейм"
                value={formData.name.value}
                onChange={(e) => setFormDataField('name', e)}
                errorText={formData.name.error}
              />
              <Input
                label="E-mail:"
                placeholder="Введите ваш E-mail"
                value={formData.email.value}
                onChange={(e) => setFormDataField('email', e)}
                errorText={formData.email.error}
              />
              <InputWithBtnIcon
                label="Пароль: *"
                placeholder="Введите пароль"
                input={{ type: 'password' }}
                value={formData.password.value}
                onClickBtnIcon={changePasswordVisible}
                onChange={(e) => setFormDataField('password', e)}
                svgComponent={<EyeSVG />}
                errorText={formData.password.error}
              />
              <InputWithBtnIcon
                label="Подтверждение пароля: *"
                placeholder="Введите пароль ещё раз"
                input={{ type: 'password' }}
                value={formData.confirmPassword.value}
                onClickBtnIcon={changePasswordVisible}
                onChange={(e) => setFormDataField('confirmPassword', e)}
                svgComponent={<EyeSVG />}
                errorText={formData.confirmPassword.error}
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
                title="Создать аккаунт"
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

export default SignUp