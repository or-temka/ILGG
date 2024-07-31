import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { AxiosResponse } from 'axios'
import { useDispatch } from 'react-redux'

import { AvatarSettingsForm } from './interfaces'
import onSubmit from './onSubmit'
import Validations from 'validations/validations'
import ShowUploadedImage from './components/ShowUploadedImage'
import { useNotificationPanel } from 'hooks'
import { setMyUser } from '../../../../../../../redux/slices/myProfile/slice'
import {
  Button,
  buttonVariant,
  floatingNotificationVariant,
  InputFile,
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
    watch,
  } = useForm<AvatarSettingsForm>({ mode: 'onChange' })

  const addNotificationSuccessPanel = useNotificationPanel({
    variant: floatingNotificationVariant.success,
  })
  const addNotificationErrorPanel = useNotificationPanel({
    variant: floatingNotificationVariant.error,
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
        className={styles.form}
        onSubmit={handleSubmit((data) =>
          onSubmit(
            data,
            setError,
            onSubmited,
            setIsSendBtnLoading,
            addNotificationErrorPanel
          )
        )}
      >
        <InputFile
          register={register('avatar', Validations.UseForm.User.avatar)}
          label="Изображение аватара:"
          placeholder="Выберите изображение..."
          accept=".jpeg, .jpg, .png"
          file={watch('avatar') ? watch('avatar')[0] : null}
          errorText={errors.avatar?.message}
        />

        <Button
          title="Сохранить"
          type="submit"
          variant={buttonVariant.primary}
          disabled={isSendBtnLoading}
        />
      </form>

      <ShowUploadedImage image={watch('avatar') ? watch('avatar')[0] : null} />
    </>
  )
}

export default Form
