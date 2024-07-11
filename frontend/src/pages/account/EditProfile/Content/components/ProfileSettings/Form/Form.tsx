import { useCallback, useState } from 'react'

import Input from 'components/UI/inputs/Input/Input'
import TextArea from 'components/UI/inputs/TextArea/TextArea'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import EditUserService from 'services/editUserService'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'

import styles from './Form.module.scss'

function Form() {
  const [formData, setFormData] = useState({
    name: { value: '', error: '' },
    about: { value: '', error: '' },
  })
  const setFormDataField = useCallback(
    (
      field: string,
      changeEvent:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      setFormData((prev) => ({
        ...prev,
        [field]: { value: changeEvent.target.value, error: '' },
      }))
    },
    []
  )
  const [disabledSendBtn, setDisabledSendBtn] = useState(false)
  const addNotificationErrorPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.error,
  })
  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
  })

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setDisabledSendBtn(true)

      await EditUserService.editProfile(
        formData.name.value,
        formData.about.value
      )
        .then((res) =>
          addNotificationSuccessPanel('Изменения успешно сохранены!')
        )
        .catch((err) => {
          const data = err?.response?.data
          const status = err?.response?.status

          if (Array.isArray(data)) {
            const newInputs = new Set()
            data.map((wrongInput) => {
              const wrongInputPath: 'name' | 'about' = wrongInput.path
              const newInputWithError = formData[wrongInputPath]
              newInputWithError.error = wrongInput.msg
              newInputs.add(newInputWithError)
            })
            setFormData((prev) => ({ ...prev, newInputs }))
          } else {
            addNotificationErrorPanel(data?.errorMsg || 'Произошла ошибка!')
          }
        })
        .finally(() => setDisabledSendBtn(false))
    },
    [formData, setFormData, disabledSendBtn]
  )

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          label="Имя пользователя:"
          placeholder="Укажите имя пользователя"
          value={formData.name.value}
          onChange={(e) => setFormDataField('name', e)}
          errorText={formData.name.error}
        />
        <TextArea
          label="О себе:"
          placeholder="Укажите информацию о себе"
          value={formData.about.value}
          onChange={(e) => setFormDataField('about', e)}
          errorText={formData.about.error}
        />

        <Button
          title="Сохранить"
          variant={ButtonVariant.primary}
          buttonType={'submit'}
          disabled={disabledSendBtn}
        />
      </form>
    </>
  )
}

export default Form
