import { application, mongoDB } from 'models'

export interface IShopApplication extends application.ISimpleApplication {
  developer: string
  types: mongoDB.id[]
  categories: mongoDB.id[]
  themes: mongoDB.id[]
  playerTypes: mongoDB.id[]
  releaseDate: string
  statistics: Pick<application.IAppStatistic, 'views'>
  price?: number
  rating?: application.AppRating
}
