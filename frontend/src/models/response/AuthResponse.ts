import { IMyUser } from "models/myUser/IMyUser"

export interface AuthResponse {
  accessToken: string
  refreshToken: string
  user: IMyUser
}

export interface SendActivationEmailCodeResponse {
  activationLink: string
}