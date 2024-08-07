import { AxiosResponse } from 'axios'

import $api from 'http/axios'
import { myUser } from 'models'

export class MyUserService {
  static fetchMyData(): Promise<AxiosResponse<myUser.IMyUser>> {
    return $api.get<myUser.IMyUser>('/user')
  }
}
