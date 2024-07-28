import { mongoDB } from "models"

export interface AppInListProps {
  appData: {
    _id: mongoDB.id
    name: string
    imgSrc: string
  }
  classNames?: {
    wrapper?: string
  }
}
