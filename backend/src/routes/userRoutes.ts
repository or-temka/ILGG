import { Router } from 'express'

import { regUserValidation } from '../validations/userValidation'

import * as UserController from '../controllers/UserController'

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

//#endregion

export default router
