import { ReactNode } from 'react'

export interface IconTextIsletProps {
  svgComponent: ReactNode
  text: string
  onClick?: Function
  classNames?: {
    wrapper?: string
    iconContainer?: string
    textContainer?: string
  }
}
