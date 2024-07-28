import { ReactNode } from 'react'

export interface ImgLightRightContentPorops {
  children: ReactNode
  img: {
    src: string
    alt?: string
  }
  classNames?: {
    wrapper?: string
    img?: string
    content?: string
  }
}
