import { Router } from 'express'

import {
  checkIsActiveEmailLinkValidation,
  checkOutEmailCodeValidation,
  regEmailUserValidation,
  regUserValidation,
} from '../../../validations/userValidation/validation'
import * as UserController from '../../../controllers/UserController'

const router = Router()

router.post(
  `/sign-up`,
  regUserValidation,
  UserController.signUp
)
router.get(
  `/sign-up`,
  checkIsActiveEmailLinkValidation,
  UserController.isActiveEmailLink
)
router.post(
  `/sign-up-email`,
  regEmailUserValidation,
  UserController.signUpEmail
)
router.post(
  `/repeat-send-sign-up-email`,
  regEmailUserValidation,
  UserController.repeatSignUpEmail
)
router.get(
  `/sign-up-email`,
  checkOutEmailCodeValidation,
  UserController.checkEmailCode
)
router.post(`/sign-in`, UserController.signIn)
router.post(`/log-out`, UserController.logOut)

export default router
