import { MongoId } from 'models/mongoDB'

export interface IUserProfile {
  _id: MongoId
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
}
