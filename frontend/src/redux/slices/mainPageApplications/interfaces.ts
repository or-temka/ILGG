import { ISimpleApplication } from 'models/application/ISimpleApplication'
import { SliceState } from 'redux/interfaces'

type MainPageApplicationsState = SliceState<ISimpleApplication[] | []>

export default MainPageApplicationsState

//#region reduces interfaces
export interface SetUserAction {
  type: string
  payload: ISimpleApplication[] | null
}
//#endregion
