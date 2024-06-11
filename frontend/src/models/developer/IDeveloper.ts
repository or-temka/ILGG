import { MongoId } from 'models/mongoDB'

export interface IDeveloper {
  _id: MongoId
  name: string
}
