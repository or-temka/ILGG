import { MongoId } from 'models/mongoDB'
import { ISimpleApplication } from './ISimpleApplication'

export interface IAppFromLibrary extends ISimpleApplication {
  types: MongoId[]
}
