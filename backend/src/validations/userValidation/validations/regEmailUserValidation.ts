import { body } from 'express-validator'

const regEmailUserValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),
]

export default regEmailUserValidation
