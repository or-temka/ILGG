import { MongoId } from 'models/mongoDB'
import { ISimpleApplication } from './ISimpleApplication'
import { IAppStatistic } from './IAppStatistic'
import { AppRating } from './types/AppRating'

export interface IShopApplication extends ISimpleApplication {
  developer: string
  types: MongoId[]
  categories: MongoId[]
  themes: MongoId[]
  playerTypes: MongoId[]
  releaseDate: string
  statistics: Pick<IAppStatistic, 'views'>
  price?: number
  rating?: AppRating
}
