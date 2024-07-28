import { ReactNode } from 'react'

import { user } from 'models'

export interface CommentProps {
  commentData: {
    text: string
    date: string
  }
  userAuthor: user.IUserProfile
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
