import { useForm } from 'react-hook-form'

import Input from 'components/UI/inputs/Input/Input'
import TextArea from 'components/UI/inputs/TextArea/TextArea'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import { ProfileSettingsForm } from './interfaces'
import onSubmit from './onSubmit'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'

import styles from './Form.module.scss'
import { useState } from 'react'

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
        <Input
          register={register('name', {
            required: 'Поле обязательно для заполнения',
            maxLength: {
              value: 30,
              message: 'Максимальная длина имени: 30 символов',
            },
            pattern: {
              value:
                /^(?!.*\s{2})[a-zA-Zа-яА-ЯёЁ0-9_]+(?:\s[a-zA-Zа-яА-ЯёЁ0-9_]+)*$/,
              message: 'Неверный формат имени пользователя',
            },
          })}
          label="Имя пользователя:"
          placeholder="Укажите имя пользователя"
          errorText={errors.name?.message}
        />
        <TextArea
          register={register('about', {
            maxLength: {
              value: 500,
              message: 'Максимальная длина имени: 500 символов',
            },
          })}
          cols={45}
          rows={5}
          label="О себе:"
          placeholder="Укажите информацию о себе"
          errorText={errors.about?.message}
        />

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
