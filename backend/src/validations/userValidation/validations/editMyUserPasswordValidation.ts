import { password } from '../validationCases/userValidationCases'

const editMyUserPasswordValidation = [
  password('oldPassword'),
  password('newPassword'),
  password('newPasswordConfirm'),
]

export default editMyUserPasswordValidation
