import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import styles from './RecoveryPassword.module.scss'
import { useState } from 'react'
import Input from 'components/UI/inputs/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'

interface RecoveryPasswordProps {
  onClose?: Function
}

function RecoveryPassword({ onClose = () => {} }: RecoveryPasswordProps) {
  const [userDataValue, setUserDataValue] = useState('')
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)

  const onSendDataHandler = () => {}

  return (
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
          <form className={styles.form}>
            <Input
              value={userDataValue}
              onChange={(e) => setUserDataValue(e.target.value)}
              classNames={{ wrapper: styles.form__inputWrapper }}
              placeholder="Введите ваш Email или логин"
              label="Email или логин:"
            />
            <Button
              title="Подтвердить"
              buttonType={'submit'}
              variant={ButtonVariant.primary}
              className={styles.form__sendBtn}
              disabled={isDisabledSendBtn || !userDataValue}
              onClick={onSendDataHandler}
            />
          </form>
        </main>
      </div>
    </PopUpContainer>
  )
}

export default RecoveryPassword
