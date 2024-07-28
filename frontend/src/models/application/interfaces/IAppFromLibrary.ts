import { application, mongoDB } from 'models'

export interface IAppFromLibrary extends application.ISimpleApplication {
  types: mongoDB.id[]
}
