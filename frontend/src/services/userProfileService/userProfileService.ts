import { AxiosResponse } from 'axios'

import $api from 'http/axios'
import { IFetchUserProfileData } from './interfaces'

export class UserProfileService {
  static fetchUserProfileData(
    login: string
  ): Promise<AxiosResponse<IFetchUserProfileData>> {
    return $api.get<IFetchUserProfileData>(`/user/profile/${login}`)
  }
}
