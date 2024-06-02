import { Router } from 'express'

import * as AppController from '../controllers/AppController'

const routeEnvironment = {
  base: '/app',
}

const router = Router()

//#region routes
router.get(`${routeEnvironment.base}/:appId`, AppController.getAppFullData)
//#endregion

export default router
