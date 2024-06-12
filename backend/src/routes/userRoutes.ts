import { Router } from 'express'

import {
  checkOutEmailCodeValidation,
  editMyUserDataValidation,
  regEmailUserValidation,
  regUserValidation,
} from '../validations/userValidation'
import * as UserController from '../controllers/UserController'

import authMiddleware from '../middlewares/authMiddleware'

const routeEnvironment = {
  base: '/user',
}

const router = Router()

//#region routes
// Получение полной информации о пользователе
router.get(
  `${routeEnvironment.base}/full-user`,
  authMiddleware,
  UserController.getFullUserData
)

router.get(`${routeEnvironment.base}`, authMiddleware, UserController.getMyData)

router.post(
  `${routeEnvironment.base}/sign-up`,
  regUserValidation,
  UserController.signUp
)

router.post(
  `${routeEnvironment.base}/sign-up-email`,
  regEmailUserValidation,
  UserController.signUpEmail
)

router.post(
  `${routeEnvironment.base}/repeat-send-sign-up-email`,
  regEmailUserValidation,
  UserController.repeatSignUpEmail
)

router.get(
  `${routeEnvironment.base}/sign-up-email`,
  checkOutEmailCodeValidation,
  UserController.checkEmailCode
)

router.post(`${routeEnvironment.base}/sign-in`, UserController.signIn)

router.post(`${routeEnvironment.base}/log-out`, UserController.logOut)

// Для активации почты
router.get(
  `${routeEnvironment.base}/activate/:link`,
  UserController.profileActivate
)

// Рефреш токена если он умер
router.get(`${routeEnvironment.base}/refresh`, UserController.refresh)

router.delete(
  `${routeEnvironment.base}`,
  authMiddleware,
  UserController.delMyProfile
)

// Изменение пользователя себя
router.patch(
  `${routeEnvironment.base}`,
  authMiddleware,
  editMyUserDataValidation,
  UserController.editMyUserData
)
//#endregion

export default router
export { routeEnvironment as userRouteEnvironment }
