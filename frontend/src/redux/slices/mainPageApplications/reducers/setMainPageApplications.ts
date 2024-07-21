import MainPageApplicationsState, { SetUserAction } from '../interfaces'

const setMainPageApplications = (
  state: MainPageApplicationsState,
  action: SetUserAction
): any => ({
  data: action.payload,
  loading: false,
  error: null,
})

export default setMainPageApplications
