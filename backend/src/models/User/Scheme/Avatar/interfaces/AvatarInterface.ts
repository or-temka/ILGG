export interface AvatarInterface {
  originalFilename: string
  size: number
  qualities: {
    good: {
      filename: string
    }
    medium: {
      filename: string
    }
    low: {
      filename: string
    }
  }
}
