import { about, name } from '../validationCases/userValidationCases'

const editMyUserProfileValidation = [name().optional(), about().optional()]

export default editMyUserProfileValidation
