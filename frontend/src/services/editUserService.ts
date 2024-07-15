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

  static async editMainInfo(login: string): Promise<AxiosResponse<IMyUser>> {
    return $api.patch<IMyUser>('user/edit/main', { login })
  }

  static async editPassword(
    oldPassword: string,
    newPassword: string,
    newPasswordConfirm: string
  ): Promise<AxiosResponse<IMyUser>> {
    return $api.patch<IMyUser>('user/edit/password', {
      oldPassword,
      newPassword,
      newPasswordConfirm,
    })
  }
}
