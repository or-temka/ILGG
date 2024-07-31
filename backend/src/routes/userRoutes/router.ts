import { Router } from 'express'

import editMyUserRouter from './routes/editMyUser'
import recoveryPassword from './routes/recoveryPassword'
import authRouter from './routes/auth'
import baseRouter from './routes/base'
import profileUserRouter from './routes/profile'

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
router.use(`${routeEnvironment.base}`, profileUserRouter)

export default router
export { routeEnvironment as userRouteEnvironment }
