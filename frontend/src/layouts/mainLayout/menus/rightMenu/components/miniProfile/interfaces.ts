import { IMyUser } from 'models/myUser/IMyUser'
import { IUserProfile } from 'models/user/IUserProfile'
import { ReactNode } from 'react'

export interface MiniProfileProps {
  userData: IUserProfile | IMyUser | null
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
