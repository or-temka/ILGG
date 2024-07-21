import { IUserProfile } from 'models/user/IUserProfile'
import { SliceState } from 'redux/interfaces'

type UserState = SliceState<IUserProfile[] | []>

export default UserState

//#region reduces interfaces
export interface SetFriendsAction {
  type: string
  payload: IUserProfile[]
}
//#endregion
