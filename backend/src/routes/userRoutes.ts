import { Router } from 'express'

import { regUserValidation } from '../validations/userValidation'
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
  `${routeEnvironment.base}/reg`,
  regUserValidation,
  UserController.reg
)

//#endregion

export default router
