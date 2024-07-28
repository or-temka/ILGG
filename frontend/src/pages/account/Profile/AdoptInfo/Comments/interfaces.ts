import { user } from 'models'

export interface IUserWithComment {
  userData: user.IUserProfile
  commentData: {
    id: number | string
    text: string
    date: string
  }
}
