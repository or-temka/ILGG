export interface ISimpleApplication {
  id: string | number
  name: string
  imgSrc: string
  aboutApp: string
  isNewApp: boolean
}

export interface IApplication extends ISimpleApplication {
  id: string | number
}

export interface IShopApplication extends ISimpleApplication {
  developer: string
  type: AppType
  genres: AppGenre[]
  categories: AppCategory[]
}

// categories
export type AppCategory = {
  id: string | number
  name: string
}

// genre
export type AppGenre = {
  id: string | number
  name: string
}

// app types
export type AppType = 'game' | 'programm'
