import { Router } from 'express'

import authMiddleware from '../../../middlewares/authMiddleware'
import { getProfileData } from '../../../controllers/UserController'

const router = Router()

router.get(`/profile/:login`, getProfileData)

export default router
