import Validations from 'validations/validations'
import { InputAboutProps } from './interfaces'
import { TextArea } from 'components'

function InputAbout({ register, errors }: InputAboutProps) {
  return (
    <TextArea
      register={register('about', Validations.UseForm.User.about)}
      cols={45}
      rows={5}
      label="О себе:"
      placeholder="Укажите информацию о себе"
      errorText={errors.about?.message}
    />
  )
}

export default InputAbout
