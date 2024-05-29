import { IStatisticViews, MongoId } from './main'

export interface ISimpleApplication {
  _id: MongoId
  name: string
  imgSrc: string
  aboutApp: string
  isNewApp: boolean
}

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

export interface IApplication extends IShopApplication {
  fullAbout: {
    description: string
    previewLabel?: string
    preview?: string
    features?: string[]
  }
  comments: IAppComment[]
}

export interface IAppFromLibrary extends ISimpleApplication {}

// other
interface IAppComment {
  _id: MongoId
  author: MongoId
  dateCreate: string
  positive: boolean
  text: string
}

// App statistic
export interface IAppStatistic {
  views: IStatisticViews
}

// categories
export type AppCategory = {
  _id: MongoId
  name: string
}

// app types
export type AppType = {
  _id: MongoId
  name: string
}

// app themes
export type AppTheme = {
  _id: MongoId
  name: string
}

// app player type
export type AppPlayerType = {
  _id: MongoId
  name: string
}

// other
export type AppRating = 1 | 2 | 3 | 4 | 5

export type AppLanguage = {
  _id: MongoId
  name: string
  support: {
    interface: boolean
    voiceover: boolean
    subtitles: boolean
  }
}
