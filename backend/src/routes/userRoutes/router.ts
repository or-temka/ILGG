import { Router } from 'express'

import editMyUserRouter from './routes/editMyUser'
import recoveryPassword from './routes/recoveryPassword'
import authRouter from './routes/auth'
import baseRouter from './routes/base'

const routeEnvironment = {
  base: '/user',
  recoveryPassword: '/recovery',
  editUser: '/edit',
}

const router = Router()

router.use(`${routeEnvironment.base}`, baseRouter)
router.use(`${routeEnvironment.base}`, authRouter)
router.use(
  `${routeEnvironment.base}${routeEnvironment.recoveryPassword}`,
  recoveryPassword
)
router.use(
  `${routeEnvironment.base}${routeEnvironment.editUser}`,
  editMyUserRouter
)

export default router
export { routeEnvironment as userRouteEnvironment }
