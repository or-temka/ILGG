import { mongoDB } from "models"

export interface IDeveloper {
  _id: mongoDB.id
  name: string
}
