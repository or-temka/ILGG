import { MongoId } from 'models/mongoDB'

export interface ISimpleApplication {
  _id: MongoId
  name: string
  imgSrc: string
  aboutApp: string
  isNewApp: boolean
}
