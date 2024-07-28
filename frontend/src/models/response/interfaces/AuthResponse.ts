import { myUser } from 'models'

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: myUser.IMyUser
}

export interface SendActivationEmailCodeResponse {
  activationLink: string
}
