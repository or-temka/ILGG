import { AxiosResponse } from 'axios'

import $api from 'http/axios'

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
}
