import { AxiosResponse } from 'axios'

import $api from 'http/axios'
import { myUser } from 'models'

export default class EditUserService {
  static async editProfile(
    name: string,
    about: string
  ): Promise<AxiosResponse<myUser.IMyUser>> {
    return $api.patch<myUser.IMyUser>('user/edit/profile', { name, about })
  }

  static async editMainInfo(
    login: string
  ): Promise<AxiosResponse<myUser.IMyUser>> {
    return $api.patch<myUser.IMyUser>('user/edit/main', { login })
  }

  static async editPassword(
    oldPassword: string,
    newPassword: string,
    newPasswordConfirm: string
  ): Promise<AxiosResponse<myUser.IMyUser>> {
    return $api.patch<myUser.IMyUser>('user/edit/password', {
      oldPassword,
      newPassword,
      newPasswordConfirm,
    })
  }

  static async editPrivacy(
    privacy: myUser.IMyUserPrivacy
  ): Promise<AxiosResponse<myUser.IMyUser>> {
    return $api.patch<myUser.IMyUser>('user/edit/privacy', privacy)
  }

  static async editAvatar(
    fileFormData: FormData
  ): Promise<AxiosResponse<myUser.IMyUser>> {
    return $api.patch<myUser.IMyUser>('user/edit/avatar', fileFormData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  }
}
