import { useCallback, useState } from 'react'

import Input from 'components/UI/inputs/Input/Input'
import TextArea from 'components/UI/inputs/TextArea/TextArea'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'

import styles from './Form.module.scss'

function Form() {
  const [aboutInput, setAboutInput] = useState('')
  const [usernameInput, setUsernameInput] = useState('')
  const [realNameInput, setRealNameInput] = useState('')

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    },
    [aboutInput, usernameInput, realNameInput]
  )

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <Input
          label="Имя пользователя:"
          placeholder="Укажите имя пользователя"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
        />
        <Input
          label="Настоящее имя:"
          placeholder="Укажите ваше настоящее имя"
          value={realNameInput}
          onChange={(e) => setRealNameInput(e.target.value)}
        />
        <TextArea
          label="О себе:"
          placeholder="Укажите информацию о себе"
          value={aboutInput}
          onChange={(e) => setAboutInput(e.target.value)}
        />

        <Button
          title="Сохранить"
          variant={ButtonVariant.primary}
          buttonType={'submit'}
        />
      </form>
    </>
  )
}

export default Form
