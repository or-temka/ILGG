import { UseFormSetError } from 'react-hook-form'
import { Dispatch, SetStateAction } from 'react'

import EditUserService from 'services/editUserService'
import { AvatarSettingsForm } from './interfaces'

const onSubmit = async (
  data: AvatarSettingsForm,
  setError: UseFormSetError<AvatarSettingsForm>,
  setSuccess: Function,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setErrorPanel: Function
) => {
  try {
    setIsLoading(true)
    const formData = new FormData()
    formData.append('avatar', data.avatar[0])
    const res = await EditUserService.editAvatar(formData)
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
