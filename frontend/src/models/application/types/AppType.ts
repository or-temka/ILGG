import { MongoId } from 'models/mongoDB'

export type AppType = {
  _id: MongoId
  name: string
}
