import { ViewAppsType } from "../types"

export interface HeaderProps {
  viewAppsType: ViewAppsType
  onChangeViewAppTypes: (viewType: ViewAppsType) => void
  classNames?: {
    wrapper?: string
  }
}
