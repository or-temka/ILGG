import { mongoDB } from "models"

export type AppCategory = {
  _id: mongoDB.id
  name: string
}
