import { mongoDB } from "models"

export type AppType = {
  _id: mongoDB.id
  name: string
}
