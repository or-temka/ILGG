import AuthUserFormValidation from './validations/auth'
import UserUseFormValidation from './validations/user'

export default class useFormValidations {
  static User = UserUseFormValidation
  static Auth = AuthUserFormValidation
}
