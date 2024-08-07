import { query } from 'express-validator'
import { email } from '../validationCases/userValidationCases'

export const checkOutEmailCodeValidation = [
  email('email', 'query'),

  query('activationCode')
    .isLength({ min: 6, max: 6 })
    .withMessage('Код должен состоять из 6 цифр'),
]
