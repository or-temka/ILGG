import { mongoDB } from "models"

export interface IUserProfile {
  _id: mongoDB.id
  name: string
  login: string
  imgName: string | null
  isOnline: boolean
}
