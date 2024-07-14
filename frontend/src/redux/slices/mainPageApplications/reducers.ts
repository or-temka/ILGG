import MainPageApplicationsState, { SetUserAction } from './interfaces'

const reducers = {
  setMainPageApplications: (
    state: MainPageApplicationsState,
    action: SetUserAction
  ): any => ({
    data: action.payload,
    loading: false,
    error: null,
  }),
}

export default reducers
