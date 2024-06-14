import { AxiosResponse } from 'axios'

import $api from 'http/axios'
import { RecoveryEmailResponse } from 'models/response/RecoveryPasswordResponse'

export default class RecoveryPasswordService {
  static async recoveryByEmail(
    userLoginOrEmail: string
  ): Promise<AxiosResponse<RecoveryEmailResponse>> {
    return $api.post<RecoveryEmailResponse>('user/recovery/recovery-by-email', {
      userLoginOrEmail,
    })
  }
}
