import { IUserProfile } from 'models/user/IUserProfile'

export interface IUserWithComment {
  userData: IUserProfile
  commentData: {
    id: number | string
    text: string
    date: string
  }
}
