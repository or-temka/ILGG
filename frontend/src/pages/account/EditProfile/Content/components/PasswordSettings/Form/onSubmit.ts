import { UseFormSetError } from 'react-hook-form'
import { Dispatch, SetStateAction } from 'react'

import EditUserService from 'services/editUserService'
import { PasswordSettingsForm } from './interfaces'

const onSubmit = async (
  data: PasswordSettingsForm,
  setError: UseFormSetError<PasswordSettingsForm>,
  setSuccess: Function,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setErrorPanel: Function
) => {
  try {
    setIsLoading(true)
    const res = await EditUserService.editPassword(
      data.oldPassword,
      data.newPassword,
      data.newPasswordConfirm
    )
    setSuccess(res)
  } catch (error: any) {
    const errData = error.response.data
    if (Array.isArray(errData)) {
      errData.forEach((errField) => {
        setError(errField.path, { message: errField.msg })
      })
    } else {
      setErrorPanel(errData.message)
    }
  } finally {
    setIsLoading(false)
  }
}

export default onSubmit
