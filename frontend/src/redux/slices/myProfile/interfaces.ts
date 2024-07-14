import { IMyUser } from 'models/myUser/IMyUser'
import { SliceState } from 'redux/interfaces'

type ProfileState = SliceState<IMyUser | null>

export default ProfileState

// #region reducers interfaces
export interface SetMyUserAction {
  type: string
  payload: IMyUser | null
}
// #endregion
