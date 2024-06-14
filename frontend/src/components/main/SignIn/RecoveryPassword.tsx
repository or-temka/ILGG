import { useState } from 'react'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import Input from 'components/UI/inputs/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'
import RecoveryPasswordVerifyEmail from './RecoveryPasswordVerifyEmail'

import styles from './RecoveryPassword.module.scss'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import { RecoveryEmailError } from 'models/response/RecoveryPasswordResponse'
import {
  PanelVariant,
  addPanel,
} from '../../../redux/slices/floatingPanelsQueueSlice'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'

interface RecoveryPasswordProps {
  onClose: Function
  onCloseSignIn: Function
}

function RecoveryPassword({ onClose, onCloseSignIn }: RecoveryPasswordProps) {
  const dispatch = useDispatch()

  const [userDataValue, setUserDataValue] = useState('')
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)
  const [showVerifyEmail, setShowVerifyEmail] = useState(false)

  const onSendDataHandler = async () => {
    setIsDisabledSendBtn(true)

    await RecoveryPasswordService.recoveryByEmail(userDataValue)
      .then((res) => {
        setShowVerifyEmail(true)
      })
      .catch((err: AxiosError<RecoveryEmailError>) => {
        const errMsg = err.response?.data.errorMsg

        if (err.response?.status === 409) {
          return setShowVerifyEmail(true)
        }

        dispatch(
          addPanel({
            item: {
              type: PanelVariant.textNotification,
              variant: FloatingNotificationVariant.error,
              text: errMsg || 'Произошла ошибка!',
            },
          })
        )
      })
      .finally(() => setIsDisabledSendBtn(false))
  }

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

      {showVerifyEmail && (
        <RecoveryPasswordVerifyEmail
          onClose={() => setShowVerifyEmail(false)}
          emailOrLogin={userDataValue}
          onCloseSignIn={onCloseSignIn}
        />
      )}
    </>
  )
}

export default RecoveryPassword
