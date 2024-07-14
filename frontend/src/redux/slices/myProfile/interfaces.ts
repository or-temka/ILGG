import { IMyUser } from 'models/myUser/IMyUser'

type ProfileState = {
  data: IMyUser | null
  loading: boolean
  error: string | null | undefined
}

export default ProfileState

// #region reducers interfaces
export interface SetMyUserAction {
  type: string
  payload: IMyUser | null
}
// #endregion
