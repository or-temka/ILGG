import { useState } from 'react'

import Input from '../../components/UI/inputs/Input'
import Checkbox from '../../components/UI/inputs/Checkbox'
import Button, { ButtonVariant } from '../../components/UI/buttons/Button'
import InputWithBtnIcon from '../../components/UI/inputs/InputWithBtnIcon'
import { ReactComponent as EyeSVG } from '../../assets/svgs/eye.svg'

import styles from './SignUp.module.scss'

function SignUp() {
  const [formData, setFormData] = useState({
    login: '',
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
    personalDataConsent: false,
  })

  const setFormDataField = (
    field: string,
    changeEvent: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: changeEvent.target.value }))
  }

  const onClickCreateAccountButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    // reg TODO
  }

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
              label="Логин:"
              placeholder="Введите ваш логин"
              value={formData.login}
              onChange={(e) => setFormDataField('login', e)}
            />
            <Input
              label="Никнейм:"
              placeholder="Введите ваш никнейм"
              value={formData.nickname}
              onChange={(e) => setFormDataField('nickname', e)}
            />
            <Input
              label="E-mail:"
              placeholder="Введите ваш E-mail"
              value={formData.email}
              onChange={(e) => setFormDataField('email', e)}
            />
            <InputWithBtnIcon
              label="Пароль:"
              placeholder="Введите пароль"
              input={{ type: 'password' }}
              value={formData.password}
              onChange={(e) => setFormDataField('password', e)}
              svgComponent={<EyeSVG />}
            />
            <InputWithBtnIcon
              label="Подтверждение пароля:"
              placeholder="Введите пароль ещё раз"
              input={{ type: 'password' }}
              value={formData.passwordConfirm}
              onChange={(e) => setFormDataField('passwordConfirm', e)}
              svgComponent={<EyeSVG />}
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
