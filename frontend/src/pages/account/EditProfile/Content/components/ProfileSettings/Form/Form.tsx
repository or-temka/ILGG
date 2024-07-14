import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { AxiosResponse } from 'axios'
import { useCallback, useState } from 'react'

import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import { ProfileSettingsForm } from './interfaces'
import onSubmit from './onSubmit'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import styles from './Form.module.scss'
import InputName from './components/InputName'
import InputAbout from './components/InputAbout'
import {
  selectMyUser,
  setMyUser,
} from '../../../../../../../redux/slices/myProfileSlice'

function Form() {
  const dispatch = useDispatch()
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ProfileSettingsForm>({
    defaultValues: {
      name: useSelector(selectMyUser).data?.name,
      about: useSelector(selectMyUser).data?.about,
    },
    mode: 'onChange',
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
        <InputName register={register} errors={errors} />
        <InputAbout register={register} errors={errors} />

        <Button
          title="Сохранить"
          variant={ButtonVariant.primary}
          type="submit"
          disabled={isSendBtnLoading}
        />
      </form>
    </>
  )
}

export default Form
