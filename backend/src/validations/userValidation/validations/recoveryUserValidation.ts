import { body } from 'express-validator'
import { email, password } from '../validationCases/userValidationCases'

export const recoveryUserValidation = [
  email(),
  body('activationEmailLink'),
  password(),
  password('confirmPassword'),
]
