import Regex from 'utils/regex'
import { GenericUseFormValidation } from '../generic'
import {
  thisFileIsImage,
  thisFileMoreMb,
} from 'utils/validations/fileValidations'

export default class UserUseFormValidation {
  static username = {
    required: GenericUseFormValidation.required,
    maxLength: {
      value: 30,
      message: 'Максимальная длина имени: 30 символов',
    },
    pattern: {
      value: Regex.user.name,
      message: 'Неверный формат имени пользователя',
    },
  }

  static login = {
    required: GenericUseFormValidation.required,
    maxLength: {
      value: 30,
      message: 'Максимальная длина логина 30 символов',
    },
    pattern: {
      value: Regex.user.login,
      message: 'Логин должен содержать символы латинского алфавита и/или цифры',
    },
  }

  static email = {
    required: GenericUseFormValidation.required,
    maxLength: {
      value: 150,
      message: 'Максимальная длина E-mail 150 символов',
    },
    pattern: {
      value: Regex.email,
      message: 'Неверный формат E-mail',
    },
  }

  static about = {
    maxLength: {
      value: 500,
      message: 'Максимальная длина имени: 500 символов',
    },
  }

  static password = {
    required: GenericUseFormValidation.required,
    minLength: {
      value: 6,
      message: 'Пароль должен содеражать не менее 6 символов',
    },
    maxLength: {
      value: 50,
      message: 'Пароль должен содеражать не более 50 символов',
    },
  }

  static avatar = {
    required: GenericUseFormValidation.required,
    validate: validateUserAvatar,
  }
}

function validateUserAvatar(value: FileList) {
  const file = value[0]
  if (!thisFileIsImage(file))
    return 'Только изображение в формате jpg, jpeg, png'
  if (thisFileMoreMb(file)) return 'Размер файла не должен превышать 2 мб'
  return true
}
