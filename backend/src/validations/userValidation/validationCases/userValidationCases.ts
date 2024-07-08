import { body } from 'express-validator'

export const login = (name: string = 'login') =>
  body(name)
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
    )

export const password = (name: string = 'password') =>
  body(name)
    .isString()
    .withMessage('пароль пользователя должен быть строкой')
    .isLength({
      min: 6,
      max: 50,
    })
    .withMessage('пароль пользователя должен содержать от 6 до 50 символов')
