import { FieldErrors, UseFormRegister } from 'react-hook-form'

import { ProfileSettingsForm } from '../interfaces'
import Regex from 'utils/regex'
import Input from 'components/UI/inputs/Input/Input'

interface InputNameProps {
  register: UseFormRegister<ProfileSettingsForm>
  errors: FieldErrors<ProfileSettingsForm>
  [key: string]: any
}

function InputName({ register, errors }: InputNameProps) {
  return (
    <Input
      register={register('name', {
        required: 'Поле обязательно для заполнения',
        maxLength: {
          value: 30,
          message: 'Максимальная длина имени: 30 символов',
        },
        pattern: {
          value: Regex.user.name,
          message: 'Неверный формат имени пользователя',
        },
      })}
      label="Имя пользователя:"
      placeholder="Укажите имя пользователя"
      errorText={errors.name?.message}
    />
  )
}

export default InputName
