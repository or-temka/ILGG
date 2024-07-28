import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { ProfileSettingsForm } from '../interfaces'

export interface InputAboutProps {
  register: UseFormRegister<ProfileSettingsForm>
  errors: FieldErrors<ProfileSettingsForm>
  [key: string]: any
}

export interface InputNameProps {
  register: UseFormRegister<ProfileSettingsForm>
  errors: FieldErrors<ProfileSettingsForm>
  [key: string]: any
}
