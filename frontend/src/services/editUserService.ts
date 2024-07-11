import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import { IMyUser } from 'models/myUser/IMyUser'

export default class EditUserService {
  static async editProfile(
    name: string,
    about: string
  ): Promise<AxiosResponse<IMyUser>> {
    return $api.patch<IMyUser>('user/edit/profile', { name, about })
  }
}
