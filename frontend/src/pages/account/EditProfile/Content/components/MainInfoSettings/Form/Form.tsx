import { useCallback, useState } from 'react'

import Input from 'components/UI/inputs/Input/Input'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'

import styles from './Form.module.scss'

function Form() {
  const [login, setLogin] = useState('')

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    },
    [login]
  )

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          label="Логин:"
          placeholder="Введите логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />

        <Button
          title="Сохранить"
          buttonType="submit"
          variant={ButtonVariant.primary}
        />
      </form>
    </>
  )
}

export default Form
