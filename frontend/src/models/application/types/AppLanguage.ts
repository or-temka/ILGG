import { MongoId } from 'models/mongoDB'

export type AppLanguage = {
  _id: MongoId
  name: string
  support: {
    interface: boolean
    voiceover: boolean
    subtitles: boolean
  }
}
