import { useCallback, useState } from 'react'

import Input from 'components/UI/inputs/Input/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'

import styles from './Form.module.scss'

function Form() {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newPasswordConfirm, setNewPasswordConfirm] = useState('')

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    },
    [oldPassword, newPassword, newPasswordConfirm]
  )

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          label="Старый пароль:"
          placeholder="Введите ваш старый пароль"
          inputType="password"
          inputAutocomplete="oldPassword"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
        />

        <Input
          label="Новый пароль:"
          placeholder="Введите новый пароль"
          inputType="password"
          inputAutocomplete="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Input
          label="Подтверждение нового пароля:"
          placeholder="Введите новый пароль ещё раз"
          inputType="password"
          inputAutocomplete="newPasswordConfirm"
          value={newPasswordConfirm}
          onChange={(e) => setNewPasswordConfirm(e.target.value)}
        />

        <Button title="Сохранить" variant={ButtonVariant.primary} />
      </form>
    </>
  )
}

export default Form
