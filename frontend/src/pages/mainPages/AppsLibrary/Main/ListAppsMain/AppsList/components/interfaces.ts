import { MongoId } from 'models/mongoDB'

export interface AppInListProps {
  appData: {
    _id: MongoId
    name: string
    imgSrc: string
  }
  classNames?: {
    wrapper?: string
  }
}
