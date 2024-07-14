import UserState, { SetFriendsAction } from './interfaces'

const reducers = {
  setFriends: (state: UserState, action: SetFriendsAction): any => [
    ...action.payload,
  ],
}

export default reducers
