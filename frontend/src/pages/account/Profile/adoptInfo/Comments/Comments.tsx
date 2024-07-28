import { CommentSkeleton, Comment } from 'components'
import { IUserWithComment } from './interfaces'
import styles from './Comments.module.scss'

const usersWithComments: IUserWithComment[] = [
  {
    userData: {
      id: 1,
      name: 'Алина убивца',
      login: 'alina',
      isOnline: true,
      imgName: 'alina.jpg',
      avatar: null,
    },
    commentData: {
      id: 1,
      text: 'Привет это первый коммент и он ооочень большой, как ты можешь заметить (то есть прям больше чем 50 символов) и он не будет показываться полностью пока не наберется 50 символов. павпвапвап ураааааа за россию!!!!! Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.Я просто текст.',
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
      avatar: null,
    },
    commentData: {
      id: 2,
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
          key={userWithComment.commentData.id}
          commentData={userWithComment.commentData}
          userAuthor={userWithComment.userData}
        />
      ))}
    </div>
  )
}

export default Comments
