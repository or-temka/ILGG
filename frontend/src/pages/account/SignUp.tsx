import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AxiosResponse } from 'axios'

import Input from '../../components/UI/inputs/Input'
import Checkbox from '../../components/UI/inputs/Checkbox'
import Button, { ButtonVariant } from '../../components/UI/buttons/Button'
import InputWithBtnIcon from '../../components/UI/inputs/InputWithBtnIcon'
import { ReactComponent as EyeSVG } from '../../assets/svgs/eye.svg'

import { setPageName } from '../../utils/setPageName'
import { fetchSignUp } from '../../api/api'
import { setUserToken } from '../../utils/auth/userTokenManager'
import {
  PanelVariant,
  addPanel,
} from '../../redux/slices/floatingPanelsQueueSlice'

import styles from './SignUp.module.scss'
import { FloatingNotificationVariant } from '../../components/UI/floatingPanels/FloatingNotification'

function SignUp() {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    login: { value: '', error: '' },
    name: { value: '', error: '' },
    email: { value: '', error: '' },
    password: { value: '', error: '' },
    confirmPassword: { value: '', error: '' },
    personalDataConsent: false,
  })

  const changePasswordVisible = (elem: ParentNode | null) => {
    const input = elem?.querySelector('input')
    if (!input) return
    input.type = input?.type === 'password' ? 'text' : 'password'
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

  const onClickCreateAccountButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()

    const userData = {
      name: formData.name.value,
      login: formData.login.value,
      password: formData.password.value,
      confirmPassword: formData.confirmPassword.value,
      email: formData.email.value,
    }
    fetchSignUp(userData).then((res: AxiosResponse | undefined) => {
      // обработка ошибки
      if (res?.status !== 201) {
        const error = res?.data

        if (Array.isArray(error)) {
          const newInputs = new Set()
          error.map((wrongInput) => {
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
                text: error?.errorMsg || 'Произошла ошибка!',
              },
            })
          )
        }
      }

      //без ошибок
      const token = res?.data.token
      setUserToken(token)
    })
  }

  useEffect(() => {
    setPageName('Регистрация')
  }, [])

  return (
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
              disabled={!formData.personalDataConsent}
              variant={ButtonVariant.primary}
              onClick={onClickCreateAccountButton}
              className={styles.form__createButton}
            />
          </form>
        </div>

        <div className={[styles.signUp__contentItem, styles.whyWe].join(' ')}>
          <div className={styles.whyWe__textContent}>
            <h3 className={styles.whyWe__label}>Почему мы?</h3>
            <ul className={styles.whyWe__whyList}>
              <li className={styles.whyWe__whyListItem}>
                Доступ к вашим играм и приложениям из любой точки мира с любого
                устройства
              </li>
              <li className={styles.whyWe__whyListItem}>
                Множество бесплатных программ
              </li>
              <li className={styles.whyWe__whyListItem}>
                Не требуем скачивания клиента на ваше устройство - всё сразу
                доступно из вашего браузера
              </li>
            </ul>
          </div>
          <div className={styles.whyWe__poster}>
            <img
              className={styles.whyWe__posterImg}
              src={require('../../assets/images/posters/monitorWithPhone1.png')}
              alt="ILGG для компьютера и телефона"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
