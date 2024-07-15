import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosResponse } from 'axios'

import Checkbox from 'components/UI/inputs/Checkbox/Checkbox'
import styles from './Form.module.scss'
import {
  selectMyUser,
  setMyUser,
} from '../../../../../../../redux/slices/myProfile/slice'
import { PrivacySettingsForm } from './interfaces'
import formDefaultValues from './formDefaultValues'
import useNotificationPanel from 'hooks/dispatch/useNotificationPanel'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'
import onSubmit from './onSubmit'
import Button, { ButtonVariant } from 'components/UI/buttons/Button/Button'

function Form() {
  const dispatch = useDispatch()
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const myUserPrivacy = useSelector(selectMyUser).data?.privacy
  const { register, handleSubmit, setError } = useForm<PrivacySettingsForm>({
    defaultValues: formDefaultValues(myUserPrivacy),
  })

  const addNotificationSuccessPanel = useNotificationPanel({
    variant: FloatingNotificationVariant.success,
  })

  const onSubmited = useCallback(
    (res: AxiosResponse) => {
      addNotificationSuccessPanel('Успешно сохранено!')
      dispatch(setMyUser(res.data))
    },
    [addNotificationSuccessPanel, dispatch]
  )

  return (
    <>
      <form
        onSubmit={handleSubmit((data) =>
          onSubmit(data, setError, onSubmited, setIsSendBtnLoading)
        )}
        className={styles.form}
      >
        <fieldset className={styles.form__fieldset}>
          <legend className={styles.form__legend}>Приложения:</legend>
          <div className={styles.form__fieldsetContent}>
            <Checkbox
              register={register('games.onlyAvailableToMe')}
              label="Информация о моих играх доступна только мне"
            />
          </div>
        </fieldset>
        <fieldset className={styles.form__fieldset}>
          <legend className={styles.form__legend}>Инвентарь:</legend>
          <div className={styles.form__fieldsetContent}>
            <Checkbox
              register={register('inventory.onlyAvailableToMe')}
              label="Основная информация о моем инвентаре доступна только мне"
            />
            <Checkbox
              register={register('inventory.onlyAvailableToMeAndFriends')}
              label="Основная информация о моем инвентаре доступна только мне и моим друзьям"
            />
          </div>
        </fieldset>
        <fieldset className={styles.form__fieldset}>
          <legend className={styles.form__legend}>Сообщения:</legend>
          <div className={styles.form__fieldsetContent}>
            <Checkbox
              register={register('messages.onlyFriendMessages')}
              label="Только друзья могут писать мне личные сообщения"
            />
          </div>
        </fieldset>
        <fieldset className={styles.form__fieldset}>
          <legend className={styles.form__legend}>Профиль:</legend>
          <div className={styles.form__fieldsetContent}>
            <Checkbox
              register={register('profile.mainInfoOnlyFriends')}
              label="Основная информация моего профиля доступна только друзьям"
            />
          </div>
        </fieldset>
        <Button
          title="Сохранить"
          type="submit"
          variant={ButtonVariant.primary}
          disabled={isSendBtnLoading}
        />
      </form>
    </>
  )
}

export default Form
