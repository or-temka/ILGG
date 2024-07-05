import { query } from 'express-validator'

const checkIsActiveEmailLinkValidation = [
  query('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),

  query('activationLink').isString().withMessage('Код должен быть строкой'),
]

export default checkIsActiveEmailLinkValidation
