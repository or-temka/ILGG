import { body } from 'express-validator'
import {
  email,
  login,
  name,
  password,
} from '../validationCases/userValidationCases'

export const regUserValidation = [
  name(),
  email(),
  body('activationEmailLink'),
  login(),
  password(),
  password('confirmPassword'),
]
