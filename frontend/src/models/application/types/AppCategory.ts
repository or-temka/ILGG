import { MongoId } from 'models/mongoDB'

export type AppCategory = {
  _id: MongoId
  name: string
}
