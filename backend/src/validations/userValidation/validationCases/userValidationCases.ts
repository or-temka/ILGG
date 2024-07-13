import { body, query } from 'express-validator'

type queryType = 'body' | 'query'
const getQueryType = (queryType: queryType = 'body', name: string = 'name') => {
  switch (queryType) {
    case 'body':
      return body(name)

    case 'query':
      return query(name)

    default:
      return body(name)
  }
}

// cases --------------------------------------------------------------------

export const login = (name: string = 'login', queryType: queryType = 'body') =>
  getQueryType(queryType, name)
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

export const email = (name: string = 'email', queryType: queryType = 'body') =>
  getQueryType(queryType, name)
    .isEmail()
    .normalizeEmail()
    .withMessage('Не соответствует формату Email')

export const password = (
  name: string = 'password',
  queryType: queryType = 'body'
) =>
  getQueryType(queryType, name)
    .isString()
    .withMessage('пароль пользователя должен быть строкой')
    .isLength({
      min: 6,
      max: 50,
    })
    .withMessage('пароль пользователя должен содержать от 6 до 50 символов')

export const name = (name: string = 'name', queryType: queryType = 'body') =>
  getQueryType(queryType, name)
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
    )

export const about = (name: string = 'about', queryType: queryType = 'body') =>
  getQueryType(queryType, name)
    .isString()
    .withMessage('Информация о себе должна быть строкой')
    .isLength({
      max: 500,
    })
