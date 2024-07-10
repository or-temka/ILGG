import { AvatarInterface } from '../Scheme/Avatar/interfaces/AvatarInterface'
import { PrivacyInterface } from '../Scheme/Privacy/interfaces/PrivacyInterface'

export interface UserInterface {
  name: string
  email: string
  login: string
  password: string
  isOnline?: Boolean
  balance: Number
  about: string
  avatar: AvatarInterface
  privacy: PrivacyInterface
}
