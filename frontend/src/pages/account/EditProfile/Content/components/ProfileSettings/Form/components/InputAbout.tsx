import { FieldErrors, UseFormRegister } from "react-hook-form"

import { ProfileSettingsForm } from "../interfaces"
import TextArea from "components/UI/inputs/TextArea/TextArea"

interface InputAboutProps {
  register: UseFormRegister<ProfileSettingsForm>
  errors: FieldErrors<ProfileSettingsForm>
  [key: string]: any
}

function InputAbout({ register, errors }: InputAboutProps) {
  return (
    <TextArea
      register={register('about', {
        maxLength: {
          value: 500,
          message: 'Максимальная длина имени: 500 символов',
        },
      })}
      cols={45}
      rows={5}
      label="О себе:"
      placeholder="Укажите информацию о себе"
      errorText={errors.about?.message}
    />
  )
}

export default InputAbout
