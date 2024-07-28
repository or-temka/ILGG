import { ReactNode } from "react"

export interface PrivateRouteProps {
  isAllowed?: Boolean
  redirectPath?: string
  children?: ReactNode
}
