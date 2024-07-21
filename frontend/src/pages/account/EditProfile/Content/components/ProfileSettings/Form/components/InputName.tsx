import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { ProfileSettingsForm } from '../interfaces'
import Input from 'components/UI/inputs/Input/Input'
import Validations from 'validations/validations'

interface InputNameProps {
  register: UseFormRegister<ProfileSettingsForm>
  errors: FieldErrors<ProfileSettingsForm>
  [key: string]: any
}

function InputName({ register, errors }: InputNameProps) {
  return (
    <Input
      register={register('name', Validations.UseForm.User.username)}
      label="Имя пользователя:"
      placeholder="Укажите имя пользователя"
      errorText={errors.name?.message}
    />
  )
}

export default InputName
