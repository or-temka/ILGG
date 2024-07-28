import { IUserProfile } from 'models/user/IUserProfile'

export interface AddFriendPopUpProps {
  usersData: IUserProfile[] | []
  onClose?: (...args: any[]) => any
}
