import { Router } from 'express'

import {
  checkIsActiveEmailLinkValidation,
  checkOutEmailCodeForRecoveryValidation,
  checkOutEmailCodeValidation,
  editMyUserProfileValidation,
  editMyUserMainInfoValidation,
  recoveryUserValidation,
  regEmailUserValidation,
  regUserValidation,
} from '../validations/userValidation'
import * as UserController from '../controllers/UserController'

import authMiddleware from '../middlewares/authMiddleware'
import getUserMiddleware from '../middlewares/getting/getUserMiddleware'

const routeEnvironment = {
  base: '/user',
  recoveryAccount: '/user/recovery',
  editUser: '/edit',
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
router.post(
  `${routeEnvironment.recoveryAccount}/repeat-recovery-by-email`,
  UserController.repeatRecoveryByEmail
)
router.get(
  `${routeEnvironment.recoveryAccount}/recovery-by-email`,
  checkOutEmailCodeForRecoveryValidation,
  UserController.checkRecoveryEmailCode
)
router.post(
  `${routeEnvironment.recoveryAccount}`,
  recoveryUserValidation,
  UserController.recovery
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

//#endregion
//#region edit my user
router.patch(
  `${routeEnvironment.base}${routeEnvironment.editUser}/profile`,
  authMiddleware,
  editMyUserProfileValidation,
  getUserMiddleware,
  UserController.editProfileInfo
)
router.patch(
  `${routeEnvironment.base}${routeEnvironment.editUser}/main`,
  authMiddleware,
  editMyUserMainInfoValidation,
  getUserMiddleware,
  UserController.editMainInfo
)
//#endregion
//#endregion

export default router
export { routeEnvironment as userRouteEnvironment }
