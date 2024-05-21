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
