import { body } from 'express-validator'

const editMyUserProfileValidation = [
  body('name')
    .optional()
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

  body('about')
    .optional()
    .isString()
    .withMessage('Информация о себе должна быть строкой'),
]

export default editMyUserProfileValidation
