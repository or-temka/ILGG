import { user } from 'models'

export interface IFullUserProfile extends user.IUserProfile {
  aboutText: string
  level: {
    value: number
    points: {
      now: number
      atLevel: number
    }
  }
}
