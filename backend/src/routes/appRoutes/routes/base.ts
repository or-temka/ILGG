import { Router } from 'express'

import * as AppController from '../../../controllers/AppController'

const router = Router()

router.get(`/:appId`, AppController.getAppFullData)

export default router
