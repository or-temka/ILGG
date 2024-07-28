import { AxiosResponse } from 'axios'

import $api from 'http/axios'
import { myUser } from 'models'

export default class MyUserService {
  static fetchMyData(): Promise<AxiosResponse<myUser.IMyUser>> {
    return $api.get<myUser.IMyUser>('/user')
  }
}
