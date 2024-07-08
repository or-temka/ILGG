import { login } from '../validationCases/userValidationCases'

const editMyUserMainInfoValidation = [login().optional()]

export default editMyUserMainInfoValidation
