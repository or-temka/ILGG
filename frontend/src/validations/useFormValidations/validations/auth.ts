import { RegisterOptions } from 'react-hook-form'

import Regex from 'utils/regex'
import { GenericUseFormValidation } from '../generic'

export default class AuthUserFormValidation {
  static activationCode: RegisterOptions = {
    required: GenericUseFormValidation.required,
    pattern: {
      value: Regex.verifyCode,
      message: 'Код должен состоять из 6 символов',
    },
  }
}
