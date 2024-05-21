export interface IUserProfile {
  id: string | number
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
}

export interface IFullUserProfile {
  id: string | number
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
  aboutText: string
  level: {
    value: number
    points: {
      now: number
      atLevel: number
    }
  }
}
