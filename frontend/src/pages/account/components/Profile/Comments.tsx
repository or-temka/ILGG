import Comment from '../../../../components/UI/blocks/Comment'
import CommentSkeleton from '../../../../components/UI/blocks/skeletons/CommentSkeleton'

import { IUserProfile } from '../../../../interfaces/userProfile'

import styles from './Comments.module.scss'

interface IUserWithComment {
  userData: IUserProfile
  commentData: {
    text: string
    date: string
  }
}

const usersWithComments: IUserWithComment[] = [
  {
    userData: {
      id: 1,
      name: 'Алина убивца',
      login: 'alina',
      isOnline: true,
      imgName: 'alina.jpg',
    },
    commentData: {
      text: 'Привет это первый коммент',
      date: '15.02.2002',
    },
  },
  {
    userData: {
      id: 2,
      name: 'Freevel',
      login: 'freevel',
      isOnline: true,
      imgName: 'serega.jpg',
    },
    commentData: {
      text: 'Пока а это второй коммент',
      date: '22.02.2003',
    },
  },
]

function Comments() {
  // TODO получение комментариев

  return (
    <div className={styles.comments}>
      <h3 className={styles.comments__label}>Комментарии</h3>
      <CommentSkeleton />
      {usersWithComments.map((userWithComment) => (
        <Comment
          commentData={userWithComment.commentData}
          userAuthor={userWithComment.userData}
        />
      ))}
    </div>
  )
}

export default Comments
