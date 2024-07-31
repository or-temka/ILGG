import { password } from '../validationCases/userValidationCases'

export const editMyUserPasswordValidation = [
  password('oldPassword'),
  password('newPassword'),
  password('newPasswordConfirm'),
]
