import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import { AxiosResponse } from 'axios'

import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import styles from './Form.module.scss'
import InputPassword from 'components/UI/inputs/InputPassword/InputPassword'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import { setMyUser } from '../../../../../../../redux/slices/myProfile/slice'
import { PasswordSettingsForm } from './interfaces'
import onSubmit from './onSubmit'
import Validations from 'validations/validations'

function Form() {
  const dispatch = useDispatch()
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<PasswordSettingsForm>({ mode: 'onSubmit' })

  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
  })
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })

  const onSubmited = useCallback(
    (res: AxiosResponse) => {
      addNotificationSuccessPanel('Успешно сохранено!')
      dispatch(setMyUser(res.data))
    },
    [addNotificationSuccessPanel, dispatch]
  )

  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(
            data,
            setError,
            onSubmited,
            setIsSendBtnLoading,
            addNotificationErrorPanel
          )
        )}
        className={styles.form}
      >
        <InputPassword
          register={register('oldPassword', Validations.UseForm.User.password)}
          label="Старый пароль:"
          placeholder="Введите ваш старый пароль"
          autoComplete="old-password"
          errorText={errors.oldPassword?.message}
        />
        <InputPassword
          register={register('newPassword', Validations.UseForm.User.password)}
          label="Новый пароль:"
          placeholder="Введите новый пароль"
          autoComplete="new-password"
          errorText={errors.newPassword?.message}
        />
        <InputPassword
          register={register(
            'newPasswordConfirm',
            Validations.UseForm.User.password
          )}
          label="Подтверждение нового пароля:"
          placeholder="Введите новый пароль ещё раз"
          autoComplete="new-password-confirm"
          errorText={errors.newPasswordConfirm?.message}
        />

        <Button
          type="submit"
          title="Сохранить"
          variant={ButtonVariant.primary}
          disabled={isSendBtnLoading}
        />
      </form>
    </>
  )
}

export default Form