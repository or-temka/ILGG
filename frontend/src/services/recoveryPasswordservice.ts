import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import { RecoveryEmailResponse } from 'models/response/RecoveryPasswordResponse'

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
}
