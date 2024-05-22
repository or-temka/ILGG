import { MongoId } from './main'

export interface ISimpleApplication {
  _id: MongoId
  name: string
  imgSrc: string
  aboutApp: string
  isNewApp: boolean
}

export interface IApplication extends ISimpleApplication {}

export interface IShopApplication extends ISimpleApplication {
  developer: string
  type: MongoId
  genres: MongoId[]
  categories: MongoId[]
}

// categories
export type AppCategory = {
  _id: MongoId
  name: string
}

// genre
export type AppGenre = {
  _id: MongoId
  name: string
}

// app types
export type AppType = {
  _id: MongoId
  name: string
}
