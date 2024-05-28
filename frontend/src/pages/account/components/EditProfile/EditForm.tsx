import { useState } from 'react'

import Input from '../../../../components/UI/inputs/Input'
import Button, { ButtonVariant } from '../../../../components/UI/buttons/Button'

import styles from './EditForm.module.scss'

type formFieldNames =
  | 'login'
  | 'username'
  | 'email'
  | 'password'
  | 'confirmPassword'
type formValues = { [key in formFieldNames]: string }

const initialFormValues: formValues = {
  login: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
}

interface EditFormProps {
  initFormValues?: formValues
}

function EditForm({ initFormValues = initialFormValues }: EditFormProps) {
  const [formValues, setFormValues] = useState<formValues>(initFormValues)

  const onChangeFormValue = (value: string, fieldName: formFieldNames) => {
    setFormValues((prev) => ({ ...prev, [fieldName]: value }))
  }

  return (
    <form className={styles.form}>
      <div className={styles.form__inputs}>
        <Input
          label="Логин:"
          placeholder="Введите новый логин"
          value={formValues.login}
          onChange={(e) => onChangeFormValue(e.target.value, 'login')}
          inputAutocomplete="new-login"
        />
        <Input
          label="Имя пользователя:"
          placeholder="Введите новое имя пользователя"
          value={formValues.username}
          onChange={(e) => onChangeFormValue(e.target.value, 'username')}
          inputAutocomplete="new-username"
        />
        <Input
          label="E-mail (электронная почта):"
          placeholder="Введите новый логин"
          value={formValues.email}
          onChange={(e) => onChangeFormValue(e.target.value, 'email')}
          inputAutocomplete="new-email"
        />
        <Input
          label="Пароль:"
          placeholder="Введите новый пароль"
          value={formValues.password}
          onChange={(e) => onChangeFormValue(e.target.value, 'password')}
          inputAutocomplete="new-password"
          inputType="password"
        />
        <Input
          label="Подтверждение пароля:"
          placeholder="Подтвердите новый пароль"
          value={formValues.confirmPassword}
          onChange={(e) => onChangeFormValue(e.target.value, 'confirmPassword')}
          inputAutocomplete="new-password"
          inputType="password"
        />
      </div>
      <div className={styles.form__saveBtnContainer}>
        <Button
          className={styles.form__saveBtn}
          title="Сохранить изменения"
          buttonType="submit"
          variant={ButtonVariant.primary}
        />
      </div>
    </form>
  )
}

export default EditForm
