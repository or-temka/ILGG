import { Router } from 'express'

import baseRouter from './routes/base'

const routeEnvironment = {
  base: '/app',
}

const router = Router()

router.use(`${routeEnvironment.base}`, baseRouter)

export default router
