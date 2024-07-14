import AppsLibraryState, { SetLibraryAppsAction } from '../interfaces'

const setLibraryApps = (
  state: AppsLibraryState,
  action: SetLibraryAppsAction
): any => ({
  data: action.payload,
  loading: false,
  error: null,
})

export default setLibraryApps
