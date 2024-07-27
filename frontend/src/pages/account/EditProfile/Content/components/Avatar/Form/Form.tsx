import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'

import InputFile from 'components/UI/inputs/InputFile/InputFile'
import styles from './Form.module.scss'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import { AvatarSettingsForm } from './interfaces'
import onSubmit from './onSubmit'
import Validations from 'validations/validations'

function Form() {
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<AvatarSettingsForm>({ mode: 'onChange' })

  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
  })
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })

  const onSubmited = useCallback(
    (res: any) => {
      addNotificationSuccessPanel('Успешно сохранено!')
    },
    [addNotificationSuccessPanel]
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
          variant={ButtonVariant.primary}
        />
      </form>
    </>
  )
}

export default Form
