import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { AxiosResponse } from 'axios'

import {
  selectMyUser,
  setMyUser,
} from '../../../../../../../redux/slices/myProfile/slice'
import { PrivacySettingsForm } from './interfaces'
import formDefaultValues from './formDefaultValues'
import onSubmit from './onSubmit'
import AppsFieldset from './components/AppsFieldset'
import InventoryFieldset from './components/InventoryFieldset'
import MessagesFieldset from './components/MessagesFieldset'
import ProfileFieldset from './components/ProfileFieldset'
import { useNotificationPanel } from 'hooks'
import { Button, buttonVariant, floatingNotificationVariant } from 'components'
import styles from './Form.module.scss'

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
    variant: floatingNotificationVariant.success,
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
          variant={buttonVariant.primary}
          disabled={isSendBtnLoading}
        />
      </form>
    </>
  )
}

export default Form
