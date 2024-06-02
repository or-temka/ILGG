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

router.delete(
  `${routeEnvironment.base}`,
  checkAuth,
  UserController.delMyProfile
)

router.patch(
  `${routeEnvironment.base}`,
  checkAuth,
  editMyUserDataValidation,
  UserController.editMyUserData
)
//#endregion

export default router
