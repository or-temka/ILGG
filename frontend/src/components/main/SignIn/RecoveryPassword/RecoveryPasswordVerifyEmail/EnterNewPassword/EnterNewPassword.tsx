import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer/PopUpContainer'
import Input from 'components/UI/inputs/Input/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import RecoveryPasswordService from 'services/recoveryPasswordservice'
import { RecoveryEmailError } from 'models/response/RecoveryPasswordResponse'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import { setMyUser } from '../../../../../../redux/slices/myProfileSlice'

import styles from './EnterNewPassword.module.scss'

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
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })
  const [passwordValue, setPasswordValue] = useState('')
  const [confirmPasswordValue, setConfirmPasswordValue] = useState('')
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)

  const onClickSendHandler = useCallback(async () => {
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
        addNotificationErrorPanel(errorMsg || 'Произошла ошибка!')
      })
      .finally(() => setIsDisabledSendBtn(false))
  }, [
    passwordValue,
    confirmPasswordValue,
    email,
    activationLink,
    dispatch,
    navigate,
    onCloseSingIn,
    addNotificationErrorPanel,
  ])

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
