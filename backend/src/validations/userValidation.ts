import { body } from 'express-validator'

export const regUserValidation = [
  body('name')
    .isString()
    .withMessage('имя пользователя должно быть строкой')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('имя пользователя должно содержать от 1 до 50 символов'),

  body('login')
    .isString()
    .withMessage('логин пользователя должен быть строкой')
    .isLength({
      min: 1,
      max: 50,
    })
    .withMessage('логин пользователя должен содержать от 1 до 50 символов'),

  body('password')
    .isString()
    .withMessage('пароль пользователя должен быть строкой')
    .isLength({
      min: 6,
      max: 50,
    })
    .withMessage('пароль пользователя должен содержать от 6 до 50 символов'),
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
