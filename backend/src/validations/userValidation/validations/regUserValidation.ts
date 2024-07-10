import { body } from 'express-validator'
import {
  email,
  login,
  name,
  password,
} from '../validationCases/userValidationCases'

const regUserValidation = [
  name(),
  email(),
  body('activationEmailLink'),
  login(),
  password(),
  password('confirmPassword'),
]

export default regUserValidation
