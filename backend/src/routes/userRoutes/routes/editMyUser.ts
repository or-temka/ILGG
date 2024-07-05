import { Router } from 'express'

import authMiddleware from '../../../middlewares/authMiddleware'
import getUserMiddleware from '../../../middlewares/getting/getUserMiddleware'
import {
  editMyUserMainInfoValidation,
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

export default router
