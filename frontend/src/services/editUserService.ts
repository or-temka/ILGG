import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import { IMyUser } from 'models/myUser/IMyUser'
import { IMyUserPrivacy } from 'models/myUser/IMyUserPrivacy'

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

  static async editPrivacy(
    privacy: IMyUserPrivacy
  ): Promise<AxiosResponse<IMyUser>> {
    return $api.patch<IMyUser>('user/edit/privacy', privacy)
  }

  static async editAvatar(
    fileFormData: FormData
  ): Promise<AxiosResponse<IMyUser>> {
    return $api.patch<IMyUser>('user/edit/avatar', fileFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
}
