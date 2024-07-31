import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { AxiosResponse } from 'axios'

import onSubmit from './onSubmit'
import {
  selectMyUser,
  setMyUser,
} from '../../../../../../../redux/slices/myProfile/slice'
import { MainInfoSettingsForm } from './interfaces'
import Validations from 'validations/validations'
import { useNotificationPanel } from 'hooks'
import {
  Button,
  buttonVariant,
  floatingNotificationVariant,
  Input,
} from 'components'
import styles from './Form.module.scss'

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
    variant: floatingNotificationVariant.success,
  })

  const onSubmited = useCallback(
    (res: AxiosResponse) => {
      addNotificationSuccessPanel('Успешно сохранено!')
      dispatch(setMyUser(res.data.user))
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
          variant={buttonVariant.primary}
          disabled={isSendBtnLoading}
        />
      </form>
    </>
  )
}

export default Form
