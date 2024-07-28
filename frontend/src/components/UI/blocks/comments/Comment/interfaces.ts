import { ReactNode } from "react"

import { IUserProfile } from "models/user/IUserProfile"

export interface CommentProps {
  commentData: {
    text: string
    date: string
  }
  userAuthor: IUserProfile
  headerChildren?: ReactNode
  background?: boolean
  classNames?: {
    wrapper?: string
    header?: string
    content?: string
    textContent?: string
    authorImg?: string
    authorName?: string
    dateCreate?: string
  }
}