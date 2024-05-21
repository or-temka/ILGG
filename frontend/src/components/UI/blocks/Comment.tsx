import { ReactNode, useRef, useState } from 'react'

import { IUserProfile } from '../../../interfaces/userProfile'

import styles from './Comment.module.scss'

interface CommentProps {
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

function Comment({
  commentData,
  userAuthor,
  headerChildren,
  background = true,
  classNames,
}: CommentProps) {
  const [commentText, setCommentText] = useState(
    commentData.text.substring(0, 200)
  )
  const showsAllCommentText = useRef(
    (() => (commentData.text.length > 50 ? false : true))()
  )

  const showAllCommentText = () => {
    showsAllCommentText.current = true
    setCommentText(commentData.text)
  }

  return (
    <div
      className={[
        styles.comment,
        background ? styles.comment_background : '',
        classNames?.wrapper,
      ].join(' ')}
    >
      <header className={[styles.header, classNames?.header].join(' ')}>
        <div className={styles.header__mainInfo}>
          <img
            src={require(`../../../assets/images/profiles/${userAuthor.imgName}`)}
            alt={`Фото профиля ${userAuthor.name}`}
            className={[styles.header__img, classNames?.authorImg].join(' ')}
          />
          <div className={styles.header__textInfo}>
            <h4
              className={[
                styles.header__authorName,
                classNames?.authorName,
              ].join(' ')}
            >
              {userAuthor.name}
            </h4>
            <span
              className={[
                styles.header__dateCreate,
                classNames?.dateCreate,
              ].join(' ')}
            >
              Опубликовано {commentData.date}
            </span>
          </div>
        </div>
        <div className={styles.header__headerChildren}>{headerChildren}</div>
      </header>
      <main className={[styles.main, classNames?.content].join(' ')}>
        <div
          className={[styles.main__textContent, classNames?.textContent].join(
            ' '
          )}
        >
          {commentText}
        </div>
        {!showsAllCommentText.current && (
          <span
            className={styles.main__moreTextBtn}
            onClick={showAllCommentText}
          >
            Показать ещё...
          </span>
        )}
      </main>
    </div>
  )
}

export default Comment
