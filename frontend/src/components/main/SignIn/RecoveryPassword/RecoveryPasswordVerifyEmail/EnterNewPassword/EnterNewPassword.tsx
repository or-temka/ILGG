import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'

import { setMyUser } from '../../../../../../redux/slices/myProfile/slice'
import { useForm } from 'react-hook-form'
import { EnterNewPasswordForm, EnterNewPasswordProps } from './interfaces'
import Validations from 'validations/validations'
import { useNotificationPanel } from 'hooks'
import { response } from 'models'
import {
  Button,
  buttonVariant,
  floatingNotificationVariant,
  InputPassword,
  PopUpContainer,
} from 'components'
import { RecoveryPasswordService } from 'services'
import styles from './EnterNewPassword.module.scss'

function EnterNewPassword({
  email,
  activationLink,
  onClose,
  onCloseSingIn,
}: EnterNewPasswordProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterNewPasswordForm>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const addNotificationErrorPanel = useNotificationPanel({
    variant: floatingNotificationVariant.error,
  })
  const [isDisabledSendBtn, setIsDisabledSendBtn] = useState(false)

  const onSubmit = useCallback(
    async (data: EnterNewPasswordForm) => {
      setIsDisabledSendBtn(true)
      await RecoveryPasswordService.recovery(
        email,
        activationLink,
        data.password,
        data.confirmPassword
      )
        .then((res) => {
          localStorage.setItem('token', res.data.accessToken)
          dispatch(setMyUser(res.data.user))
          onCloseSingIn()
          navigate('/')
        })
        .catch((error: AxiosError<response.RecoveryEmailError>) => {
          const errorMsg = error.response?.data.errorMsg
          addNotificationErrorPanel(errorMsg || 'Произошла ошибка!')
        })
        .finally(() => setIsDisabledSendBtn(false))
    },
    [
      email,
      activationLink,
      dispatch,
      navigate,
      onCloseSingIn,
      addNotificationErrorPanel,
    ]
  )

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
          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <InputPassword
              register={register('password', Validations.UseForm.User.password)}
              placeholder="Введите пароль"
              label="Пароль:"
              classNames={{ wrapper: styles.form__input }}
              errorText={errors.password?.message}
            />
            <InputPassword
              register={register(
                'confirmPassword',
                Validations.UseForm.User.password
              )}
              placeholder="Введите пароль ещё раз"
              label="Подтверждение пароля:"
              classNames={{ wrapper: styles.form__input }}
              errorText={errors.confirmPassword?.message}
            />
            <Button
              type="submit"
              title="Подтвердить"
              variant={buttonVariant.primary}
              disabled={isDisabledSendBtn}
              className={styles.form__sendBtn}
            />
          </form>
        </main>
      </div>
    </PopUpContainer>
  )
}

export default EnterNewPassword
