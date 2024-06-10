import { IAppComment } from "./IAppComment"
import { IShopApplication } from "./IShopApplication"

export interface IApplication extends IShopApplication {
  fullAbout: {
    description: string
    previewLabel?: string
    preview?: string
    features?: string[]
  }
  comments: IAppComment[]
}
