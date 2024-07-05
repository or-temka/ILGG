import { Router } from 'express'

import * as UserController from '../../../controllers/UserController'
import authMiddleware from '../../../middlewares/authMiddleware'

const router = Router()

router.get(`/refresh`, UserController.refresh)

router.get(`/full-user`, authMiddleware, UserController.getFullUserData)
router.get(`/`, authMiddleware, UserController.getMyData)
router.delete(`/`, authMiddleware, UserController.delMyProfile)

export default router
