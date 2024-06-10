import { IUserProfile } from './IUserProfile'

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
