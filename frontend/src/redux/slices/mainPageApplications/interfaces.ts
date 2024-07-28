import { application } from 'models'
import { SliceState } from 'redux/interfaces'

type MainPageApplicationsState = SliceState<
  application.ISimpleApplication[] | []
>

export default MainPageApplicationsState

//#region reduces interfaces
export interface SetUserAction {
  type: string
  payload: application.ISimpleApplication[] | null
}
//#endregion
