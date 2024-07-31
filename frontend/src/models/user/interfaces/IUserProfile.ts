import { mongoDB } from 'models'

export interface IUserProfile {
  _id: mongoDB.id
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
  about: string
  avatar: IMyUserAvatar | null
  level: {
    value: number
    points: {
      now: number
      atLevel: number
    }
  }
}

interface IMyUserAvatar {
  qualities: {
    good: {
      filename: string
    }
    medium: {
      filename: string
    }
    low: {
      filename: string
    }
  }
}
