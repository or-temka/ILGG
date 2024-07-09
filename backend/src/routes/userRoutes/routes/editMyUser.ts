import { Router } from 'express'

import authMiddleware from '../../../middlewares/authMiddleware'
import getUserMiddleware from '../../../middlewares/getting/getUserMiddleware'
import {
  editMyUserMainInfoValidation,
  editMyUserPasswordValidation,
  editMyUserProfileValidation,
} from '../../../validations/userValidation/validation'
import * as UserController from '../../../controllers/UserController'

const router = Router()

router.patch(
  `/profile`,
  authMiddleware,
  editMyUserProfileValidation,
  getUserMiddleware,
  UserController.editProfileInfo
)
router.patch(
  `/main`,
  authMiddleware,
  editMyUserMainInfoValidation,
  getUserMiddleware,
  UserController.editMainInfo
)
router.patch(
  `/password`,
  authMiddleware,
  editMyUserPasswordValidation,
  getUserMiddleware,
  UserController.editPassword
)
router.patch(
  `/privacy`,
  authMiddleware,
  getUserMiddleware,
  UserController.editPrivacy
)

export default router
