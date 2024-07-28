import { mongoDB } from "models"

export type AppLanguage = {
  _id: mongoDB.id
  name: string
  support: {
    interface: boolean
    voiceover: boolean
    subtitles: boolean
  }
}
