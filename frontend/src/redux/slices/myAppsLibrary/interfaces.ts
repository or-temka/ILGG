import { application } from 'models'

type AppsLibraryState = {
  data: application.IAppFromLibrary[] | null
  loading: boolean
  error: string | null | undefined
}

export default AppsLibraryState

//#region reducers interfaces
export interface ReducerAction {
  type: string
}

export interface SetLibraryAppsAction extends ReducerAction {
  payload: application.IAppFromLibrary[] | null
}
//#endregion
