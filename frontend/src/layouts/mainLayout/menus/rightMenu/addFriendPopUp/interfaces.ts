import { user } from 'models'

export interface AddFriendPopUpProps {
  usersData: user.IUserProfile[] | []
  onClose?: (...args: any[]) => any
}
