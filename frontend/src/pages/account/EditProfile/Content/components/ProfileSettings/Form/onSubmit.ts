import { UseFormSetError } from 'react-hook-form'
import { Dispatch, SetStateAction } from 'react'

import EditUserService from 'services/editUserService'
import { ProfileSettingsForm } from './interfaces'

const onSubmit = async (
  data: ProfileSettingsForm,
  setError: UseFormSetError<ProfileSettingsForm>,
  setSuccess: Function,
  setIsLoading: Dispatch<SetStateAction<boolean>>
) => {
  try {
    setIsLoading(true)
    const res = await EditUserService.editProfile(data.name, data.about)
    setSuccess(res)
  } catch (error: any) {
    const errData = error.response.data
    if (Array.isArray(errData)) {
      errData.forEach((errField) => {
        setError(errField.path, { message: errField.msg })
      })
    }
  } finally {
    setIsLoading(false)
  }
}

export default onSubmit