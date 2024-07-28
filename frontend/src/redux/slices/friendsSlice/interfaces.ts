import { user } from 'models'
import { SliceState } from 'redux/interfaces'

type UserState = SliceState<user.IUserProfile[] | []>

export default UserState

//#region reduces interfaces
export interface SetFriendsAction {
  type: string
  payload: user.IUserProfile[]
}
//#endregion
