import { myUser, user } from 'models'
import { ReactNode } from 'react'

export interface MiniProfileProps {
  userData: user.IUserProfile | myUser.IMyUser | null
  buttons: Button[] | []
  iconComponent?: ReactNode
  onClickProfile?: (showProfile: boolean) => any
  classNames?: {
    wrapper?: string
    username?: string
    img?: string
    onlineStatus?: string
    menu?: string
    button?: string
  }
}

export interface Button {
  title: string
  handler: (...args: any[]) => any
}
