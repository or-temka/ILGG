import { query } from 'express-validator'
import { email } from '../validationCases/userValidationCases'

export const checkIsActiveEmailLinkValidation = [
  email('email', 'query'),
  query('activationLink').isString().withMessage('Код должен быть строкой'),
]
