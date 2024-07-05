import { Router } from 'express'

import userRouter from './userRoutes/router'
import appRouter from './appRoutes/router'

const router = Router()

router.use(userRouter)
router.use(appRouter)

export default router
