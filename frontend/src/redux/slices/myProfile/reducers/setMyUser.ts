import ProfileState, { SetMyUserAction } from '../interfaces'

const setMyUser = (state: ProfileState, action: SetMyUserAction): any => ({
  data: action.payload,
  loading: false,
  error: null,
})

export default setMyUser
