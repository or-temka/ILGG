import { query } from 'express-validator'

const checkOutEmailCodeForRecoveryValidation = [
  query('userEmailOrLogin')
    .isString()
    .withMessage('Не соответствует формату Email или логин'),

  query('activationCode')
    .isLength({ min: 6, max: 6 })
    .withMessage('Код должен состоять из 6 цифр'),
]

export default checkOutEmailCodeForRecoveryValidation
