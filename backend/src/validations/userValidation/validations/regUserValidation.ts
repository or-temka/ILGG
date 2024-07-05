import { body } from 'express-validator'

const regUserValidation = [
  body('name')
    .isString()
    .withMessage('имя пользователя должно быть строкой')
    .isLength({
      min: 1,
      max: 30,
    })
    .withMessage('имя пользователя должно содержать от 1 до 30 символов')
    .matches(/^[a-zA-Zа-яА-ЯёЁ0-9]+$/)
    .withMessage(
      'Имя пользователя должно содержать только буквы латинского, русского алфавита и цифры'
    ),

  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),
  body('activationEmailLink'),

  body('login')
    .isString()
    .withMessage('логин пользователя должен быть строкой')
    .isLength({
      min: 1,
      max: 30,
    })
    .withMessage('логин пользователя должен содержать от 1 до 30 символов')
    .matches(/^[a-zA-Z0-9]+$/)
    .withMessage(
      'Логин должен содержать только буквы латинского алфавита и цифры'
    ),

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

export default regUserValidation
