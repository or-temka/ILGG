import { query } from 'express-validator'

const checkOutEmailCodeValidation = [
  query('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),

  query('activationCode')
    .isLength({ min: 6, max: 6 })
    .withMessage('Код должен состоять из 6 цифр'),
]

export default checkOutEmailCodeValidation
