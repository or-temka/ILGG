import { query } from 'express-validator'
import { email } from '../validationCases/userValidationCases'

const checkIsActiveEmailLinkValidation = [
  email('email', 'query'),
  query('activationLink').isString().withMessage('Код должен быть строкой'),
]

export default checkIsActiveEmailLinkValidation
