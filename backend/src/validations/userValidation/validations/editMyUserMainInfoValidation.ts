import { login } from '../validationCases/userValidationCases'

export const editMyUserMainInfoValidation = [login().optional()]
