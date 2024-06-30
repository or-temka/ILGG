import { useCallback, useState } from 'react'

import Input from 'components/UI/inputs/Input/Input'
import Checkbox from 'components/UI/inputs/Checkbox/Checkbox'

import styles from './Form.module.scss'

function Form() {
  const [checkboxsValues, setCheckboxValues] = useState({
    onlyFriendProfile: false,
    onlyFriendMsg: false,
    onlyMeInventory: false,
  })

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    },
    [checkboxsValues]
  )

  return (
    <>
      <form onSubmit={onSubmit} className={styles.form}>
        <Checkbox
          label="Основная информация моего профиля доступна только друзьям"
          checked={checkboxsValues.onlyFriendProfile}
          onChange={() =>
            setCheckboxValues((prev) => ({
              ...prev,
              onlyFriendProfile: !prev.onlyFriendProfile,
            }))
          }
        />

        <Checkbox
          label="Мне могут писать личные сообщения только друзья"
          checked={checkboxsValues.onlyFriendMsg}
          onChange={() =>
            setCheckboxValues((prev) => ({
              ...prev,
              onlyFriendMsg: !prev.onlyFriendMsg,
            }))
          }
        />

        <Checkbox
          label="Информация о моем инвентаре доступна только мне"
          checked={checkboxsValues.onlyMeInventory}
          onChange={() =>
            setCheckboxValues((prev) => ({
              ...prev,
              onlyMeInventory: !prev.onlyMeInventory,
            }))
          }
        />
      </form>
    </>
  )
}

export default Form
