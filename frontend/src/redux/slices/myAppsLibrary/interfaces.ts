import { IAppFromLibrary } from 'models/application/IAppFromLibrary'

type AppsLibraryState = {
  data: IAppFromLibrary[] | null
  loading: boolean
  error: string | null | undefined
}

export default AppsLibraryState

//#region reducers interfaces
export interface ReducerAction {
  type: string
}

export interface SetLibraryAppsAction extends ReducerAction {
  payload: IAppFromLibrary[] | null
}
//#endregion
