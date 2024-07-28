import { mongoDB } from 'models'

export interface IAppComment {
  _id: mongoDB.id
  author: mongoDB.id
  dateCreate: string
  positive: boolean
  text: string
}
