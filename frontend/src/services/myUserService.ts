import { AxiosResponse } from 'axios'

import $api from 'http/axios'

import { IMyUser } from 'models/myUser/IMyUser'

export default class MyUserService {
  static fetchMyData(): Promise<AxiosResponse<IMyUser>> {
    return $api.get<IMyUser>('/user')
  }
}
