import { body } from 'express-validator'
import { email, password } from '../validationCases/userValidationCases'

const recoveryUserValidation = [
  email(),
  body('activationEmailLink'),
  password(),
  password('confirmPassword'),
]

export default recoveryUserValidation
