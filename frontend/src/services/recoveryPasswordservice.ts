import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import { AuthResponse } from 'models/response/AuthResponse'
import { sendRecoveryActivationCodeResponse } from 'models/response/RecoveryPasswordResponse'

export default class RecoveryPasswordService {
  static async recoveryByEmail(
    userLoginOrEmail: string
  ): Promise<AxiosResponse<void>> {
    return $api.post<void>('user/recovery/recovery-by-email', {
      userLoginOrEmail,
    })
  }

  static async repeatRecoveryByEmail(
    userLoginOrEmail: string
  ): Promise<AxiosResponse<void>> {
    return $api.post<void>('user/recovery/repeat-recovery-by-email', {
      userLoginOrEmail,
    })
  }

  static async sendRecoveryActivationCode(
    userEmailOrLogin: string,
    activationCode: string
  ): Promise<AxiosResponse<sendRecoveryActivationCodeResponse>> {
    return $api.get<sendRecoveryActivationCodeResponse>(
      'user/recovery/recovery-by-email',
      {
        params: { userEmailOrLogin, activationCode },
      }
    )
  }

  static async recovery(
    email: string,
    activationLink: string,
    password: string,
    confirmPassword: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('user/recovery', {
      email,
      activationLink,
      password,
      confirmPassword,
    })
  }
}
