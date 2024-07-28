import { AxiosResponse } from 'axios'

import $api from 'http/axios'
import { response } from 'models'

export class RecoveryPasswordService {
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
  ): Promise<AxiosResponse<response.sendRecoveryActivationCodeResponse>> {
    return $api.get<response.sendRecoveryActivationCodeResponse>(
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
  ): Promise<AxiosResponse<response.AuthResponse>> {
    return $api.post<response.AuthResponse>('user/recovery', {
      email,
      activationLink,
      password,
      confirmPassword,
    })
  }
}
