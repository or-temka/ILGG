import { UseFormSetError } from 'react-hook-form'
import { Dispatch, SetStateAction } from 'react'

import { SignUpEmailForm } from './interfaces'
import AuthService from 'services/authService'

const onSubmit = async (
  data: SignUpEmailForm,
  setError: UseFormSetError<SignUpEmailForm>,
  setErrorPanel: (message: string) => any,
  setIsLoading: Dispatch<SetStateAction<boolean>>,
  setDone: Function
) => {
  try {
    setIsLoading(true)
    await AuthService.registrationEmail(data.email)
    setDone(true)
  } catch (error: any) {
    const errData = error.response.data
    if (Array.isArray(errData)) {
      errData.forEach((errField) => {
        setError(errField.path, { message: errField.msg })
      })
    } else {
      setErrorPanel(errData.errorMsg)
    }
  } finally {
    setIsLoading(false)
  }
}

export default onSubmit
