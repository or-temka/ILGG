import { Router } from 'express'

import { regUserValidation } from '../validations/userValidation'
import * as UserController from '../controllers/UserController'
import checkAuth from '../utils/auth/checkAuth'

const routeEnvironment = {
  base: '/user',
}

const router = Router()

//#region routes
router.post(
  `${routeEnvironment.base}/reg`,
  regUserValidation,
  UserController.reg
)
router.get(`${routeEnvironment.base}`, checkAuth, UserController.getMyData)
//#endregion

export default router
