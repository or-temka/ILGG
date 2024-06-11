import { MongoId } from 'models/mongoDB'

export interface IAppComment {
  _id: MongoId
  author: MongoId
  dateCreate: string
  positive: boolean
  text: string
}
