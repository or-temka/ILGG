import { ReactNode } from "react"

export interface TextIsletProps {
  children?: ReactNode
  onClick?: Function
  classNames?: {
    text?: string
  }
}