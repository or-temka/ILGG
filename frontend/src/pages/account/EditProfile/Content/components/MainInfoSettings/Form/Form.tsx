import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { AxiosResponse } from 'axios'

import Input from 'components/UI/inputs/Input/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import styles from './Form.module.scss'
import onSubmit from './onSubmit'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import {
  selectMyUser,
  setMyUser,
} from '../../../../../../../redux/slices/myProfile/slice'
import { MainInfoSettingsForm } from './interfaces'
import Validations from 'validations/validations'
import { useNotificationPanel } from 'hooks'

function Form() {
  const dispatch = useDispatch()
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<MainInfoSettingsForm>({
    defaultValues: {
      login: useSelector(selectMyUser).data?.login,
    },
    mode: 'onSubmit',
  })

  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
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
          onSubmit(data, setError, onSubmited, setIsSendBtnLoading)
        )}
        className={styles.form}
      >
        <Input
          register={register('login', Validations.UseForm.User.login)}
          label="Логин:"
          placeholder="Введите логин"
          errorText={errors.login?.message}
        />

        <Button
          title="Сохранить"
          type="submit"
          variant={ButtonVariant.primary}
          disabled={isSendBtnLoading}
        />
      </form>
    </>
  )
}

export default Form
