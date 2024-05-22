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
  types: MongoId[]
  categories: MongoId[]
  themes: MongoId[]
  playerTypes: MongoId[]
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
