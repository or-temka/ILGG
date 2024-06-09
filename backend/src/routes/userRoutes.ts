import { Router } from 'express'

import {
  editMyUserDataValidation,
  regUserValidation,
} from '../validations/userValidation'
import * as UserController from '../controllers/UserController'
import checkAuth from '../utils/auth/checkAuth'

const routeEnvironment = {
  base: '/user',
}

const router = Router()

//#region routes
// Получение полной информации о пользователе
router.get(
  `${routeEnvironment.base}/full-user`,
  checkAuth,
  UserController.getFullUserData
)

router.get(`${routeEnvironment.base}`, checkAuth, UserController.getMyData)

router.post(
  `${routeEnvironment.base}/sign-up`,
  regUserValidation,
  UserController.signUp
)

router.post(`${routeEnvironment.base}/sign-in`, UserController.signIn)

// TODO
router.post(`${routeEnvironment.base}/log-out`)

// Для активации почты TODO
router.get(
  `${routeEnvironment.base}/activate/:link`,
  UserController.profileActivate
)

// Рефреш токена если он умер TODO
router.get(`${routeEnvironment.base}/refresh`)

router.delete(
  `${routeEnvironment.base}`,
  checkAuth,
  UserController.delMyProfile
)

// Изменение пользователя себя
router.patch(
  `${routeEnvironment.base}`,
  checkAuth,
  editMyUserDataValidation,
  UserController.editMyUserData
)
//#endregion

export default router
export { routeEnvironment as userRouteEnvironment }
