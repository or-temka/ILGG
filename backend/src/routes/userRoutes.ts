import { Router } from 'express'

import {
  checkIsActiveEmailLinkValidation,
  checkOutEmailCodeValidation,
  editMyUserDataValidation,
  regEmailUserValidation,
  regUserValidation,
} from '../validations/userValidation'
import * as UserController from '../controllers/UserController'

import authMiddleware from '../middlewares/authMiddleware'

const routeEnvironment = {
  base: '/user',
  recoveryAccount: '/user/recovery',
}

const router = Router()

//#region routes
//#region Auth
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
router.get(
  `${routeEnvironment.base}/sign-up`,
  checkIsActiveEmailLinkValidation,
  UserController.isActiveEmailLink
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

//#region recovery password
router.post(
  `${routeEnvironment.recoveryAccount}/recovery-by-email`,
  UserController.recoveryByEmail
)
//#endregion
//#endregion
//#region my user
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
//#endregion

export default router
export { routeEnvironment as userRouteEnvironment }
