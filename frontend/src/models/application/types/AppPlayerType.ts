import { MongoId } from 'models/mongoDB'

export type AppPlayerType = {
  _id: MongoId
  name: string
}
