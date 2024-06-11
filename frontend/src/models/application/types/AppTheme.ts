import { MongoId } from 'models/mongoDB'

export type AppTheme = {
  _id: MongoId
  name: string
}
