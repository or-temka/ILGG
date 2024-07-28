import Validations from 'validations/validations'
import { InputNameProps } from './interfaces'
import { Input } from 'components'

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
