import { body, query } from 'express-validator'

export const checkOutEmailCodeValidation = [
  query('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),

  query('activationCode')
    .isLength({ min: 6, max: 6 })
    .withMessage('Код должен состоять из 6 цифр'),
]

export const checkIsActiveEmailLinkValidation = [
  query('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),

  query('activationLink').isString().withMessage('Код должен быть строкой'),
]

export const regEmailUserValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email'),
]

export const regUserValidation = [
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

export const editMyUserDataValidation = [
  body('name')
    .optional()
    .isString()
    .withMessage('имя пользователя должно быть строкой')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('имя пользователя должно содержать от 1 до 50 символов'),

  body('login')
    .optional()
    .isString()
    .withMessage('логин пользователя должен быть строкой')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('логин пользователя должен содержать от 1 до 50 символов'),

  body('password')
    .optional()
    .isString()
    .withMessage('пароль пользователя должен быть строкой')
    .isLength({
      min: 6,
      max: 50,
    })
    .withMessage('пароль пользователя должен содержать от 6 до 50 символов'),
]
