import { mongoDB } from "models"

export type AppTheme = {
  _id: mongoDB.id
  name: string
}
