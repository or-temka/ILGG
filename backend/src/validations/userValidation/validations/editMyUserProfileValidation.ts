import { about, name } from '../validationCases/userValidationCases'

export const editMyUserProfileValidation = [
  name().optional(),
  about().optional(),
]
