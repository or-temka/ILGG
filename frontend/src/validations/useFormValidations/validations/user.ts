import { GenericUseFormValidation } from '../generic'

export default class UserUseFormValidation {
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
}
