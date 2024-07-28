import { myUser } from 'models'
import { SliceState } from 'redux/interfaces'

type ProfileState = SliceState<myUser.IMyUser | null>

export default ProfileState

// #region reducers interfaces
export interface SetMyUserAction {
  type: string
  payload: myUser.IMyUser | null
}
// #endregion
