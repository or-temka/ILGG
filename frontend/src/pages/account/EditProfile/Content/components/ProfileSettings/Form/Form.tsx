import { useForm } from 'react-hook-form'
import { useState } from 'react'

import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import { ProfileSettingsForm } from './interfaces'
import onSubmit from './onSubmit'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import styles from './Form.module.scss'
import InputName from './components/InputName'
import InputAbout from './components/InputAbout'

function Form() {
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ProfileSettingsForm>({
    defaultValues: {},
    mode: 'onChange',
  })

  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
  })

  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(
            data,
            setError,
            addNotificationSuccessPanel,
            setIsSendBtnLoading
          )
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
