import { Router } from 'express'

import {
  checkOutEmailCodeForRecoveryValidation,
  recoveryUserValidation,
} from '../../../validations/userValidation/validation'
import * as UserController from '../../../controllers/UserController'

const router = Router()

router.post(`/recovery-by-email`, UserController.recoveryByEmail)
router.post(`/repeat-recovery-by-email`, UserController.repeatRecoveryByEmail)
router.get(
  `/recovery-by-email`,
  checkOutEmailCodeForRecoveryValidation,
  UserController.checkRecoveryEmailCode
)
router.post(`/`, recoveryUserValidation, UserController.recovery)

export default router
