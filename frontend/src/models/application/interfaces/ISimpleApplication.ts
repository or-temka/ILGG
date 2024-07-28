import { mongoDB } from "models"

export interface ISimpleApplication {
  _id: mongoDB.id
  name: string
  imgSrc: string
  aboutApp: string
  isNewApp: boolean
}
