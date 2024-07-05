import { body } from 'express-validator'

const editMyUserMainInfoValidation = [
  body('login')
    .optional()
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
]

export default editMyUserMainInfoValidation
