import { MongoId } from './main'

export interface IUserProfile {
  _id: MongoId
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
}

export interface IFullUserProfile extends IUserProfile {
  aboutText: string
  level: {
    value: number
    points: {
      now: number
      atLevel: number
    }
  }
}
