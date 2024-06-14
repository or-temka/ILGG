import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { AxiosError } from 'axios'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import Input from 'components/UI/inputs/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import { RecoveryEmailError } from 'models/response/RecoveryPasswordResponse'
import {
  PanelVariant,
  addPanel,
} from '../../../redux/slices/floatingPanelsQueueSlice'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'
import { setMyUser } from '../../../redux/slices/myProfileSlice'

import styles from './EnterNewPassword.module.scss'
import { useNavigate } from 'react-router-dom'

interface EnterNewPasswordProps {
  email: string
  activationLink: string
  onClose: Function
  onCloseSingIn: Function
}

function EnterNewPassword({
  email,
  activationLink,
  onClose,
  onCloseSingIn,
}: EnterNewPasswordProps) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)

  const onClickSendHandler = async () => {
    setIsDisabledSendBtn(true)

    await RecoveryPasswordService.recovery(
      email,
      activationLink,
      passwordValue,
      confirmPasswordValue
    )
      .then((res) => {
        localStorage.setItem('token', res.data.accessToken)
        dispatch(setMyUser(res.data.user))
        onCloseSingIn()
        navigate('/')
      })
      .catch((error: AxiosError<RecoveryEmailError>) => {
        const errorMsg = error.response?.data.errorMsg
        dispatch(
          addPanel({
            item: {
              type: PanelVariant.textNotification,
              variant: FloatingNotificationVariant.error,
              text: errorMsg || 'Произошла ошибка!',
            },
          })
        )
      })
      .finally(() => setIsDisabledSendBtn(false))
  }

  return (
    <PopUpContainer
      classNames={{ wrapperClassName: styles.popUp }}
      onClose={() => onClose()}
    >
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
              onClick={onClickSendHandler}
            />
          </form>
        </main>
      </div>
    </PopUpContainer>
  )
}

export default EnterNewPassword
