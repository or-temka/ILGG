import UserState, { SetFriendsAction } from '../interfaces'

const setFriends = (state: UserState, action: SetFriendsAction): any => [
  ...action.payload,
]

export default setFriends
