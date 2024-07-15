import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosResponse } from 'axios'

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
import AppsFieldset from './components/AppsFieldset'
import InventoryFieldset from './components/InventoryFieldset'
import MessagesFieldset from './components/MessagesFieldset'
import ProfileFieldset from './components/ProfileFieldset'

function Form() {
  const dispatch = useDispatch()
  const [isSendBtnLoading, setIsSendBtnLoading] = useState(false)
  const myUserPrivacy = useSelector(selectMyUser).data?.privacy
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<PrivacySettingsForm>({
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
        <AppsFieldset control={control} errors={errors} />
        <InventoryFieldset control={control} errors={errors} />
        <MessagesFieldset control={control} errors={errors} />
        <ProfileFieldset control={control} errors={errors} />

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
