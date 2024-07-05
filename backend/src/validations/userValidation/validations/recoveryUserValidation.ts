import { body } from 'express-validator'

const recoveryUserValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),

  body('activationEmailLink'),

  body('password')
    .isString()
    .withMessage('пароль пользователя должен быть строкой')
    .isLength({
      min: 6,
      max: 50,
    })
    .withMessage('пароль пользователя должен содержать от 6 до 50 символов'),

  body('confirmPassword')
    .isString()
    .withMessage('подтверждение пароля должно быть строкой')
    .isLength({
      min: 6,
      max: 50,
    })
    .withMessage('подтверждение пароля должно содержать от 6 до 50 символов'),
]

export default recoveryUserValidation
