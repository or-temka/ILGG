import { application } from 'models'

export interface IApplication extends application.IShopApplication {
  fullAbout: {
    description: string
    previewLabel?: string
    preview?: string
    features?: string[]
  }
  comments: application.IAppComment[]
}
