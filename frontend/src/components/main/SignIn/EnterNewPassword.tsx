import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'

import styles from './EnterNewPassword.module.scss'
import { useState } from 'react'
import Input from 'components/UI/inputs/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'

function EnterNewPassword() {
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)

  return (
    <PopUpContainer classNames={{ wrapperClassName: styles.popUp }}>
      <div className={styles.modal}>
        <header className={styles.modal__header}>
          <h3 className={styles.modal__label}>Новый пароль</h3>
        </header>
        <main className={styles.modal__main}>
          <p className={styles.modal__aboutText}>
            Введите новый пароль для аккаунта.
          </p>
          <form className={styles.form}>
            <Input
              value={passwordValue}
              onChange={(e) => setPasswordValue(e.target.value)}
              placeholder="Введите пароль"
              label="Пароль:"
              inputType="password"
              classNames={{ wrapper: styles.form__input }}
            />
            <Input
              value={confirmPasswordValue}
              onChange={(e) => setConfirmPasswordValue(e.target.value)}
              placeholder="Введите пароль ещё раз"
              label="Подтверждение пароля:"
              inputType="password"
              classNames={{ wrapper: styles.form__input }}
            />
            <Button
              title="Подтвердить"
              buttonType={'submit'}
              variant={ButtonVariant.primary}
              disabled={
                isDisabledSendBtn || !passwordValue || !confirmPasswordValue
              }
              className={styles.form__sendBtn}
            />
          </form>
        </main>
      </div>
    </PopUpContainer>
  )
}

export default EnterNewPassword
