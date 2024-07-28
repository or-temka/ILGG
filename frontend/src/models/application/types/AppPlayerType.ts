import { mongoDB } from "models"

export type AppPlayerType = {
  _id: mongoDB.id
  name: string
}
