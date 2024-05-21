import SkeletonText from '../../../skeletons/SkeletonText'

import styles from '../Comment.module.scss'

interface CommentProps {
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

function Comment({ background = true, classNames }: CommentProps) {
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
          <div
            className={[
              styles.header__img,
              'pulse',
              classNames?.authorImg,
            ].join(' ')}
          />
          <div
            className={[
              styles.header__textInfo,
              styles.skeleton__textInfo,
            ].join(' ')}
          >
            <div
              className={[
                styles.header__authorName,
                styles.skeleton__authorName,
                'pulse',
                classNames?.authorName,
              ].join(' ')}
            ></div>
            <div
              className={[
                styles.header__dateCreate,
                styles.skeleton__dateCreate,
                'pulse',
                classNames?.dateCreate,
              ].join(' ')}
            ></div>
          </div>
        </div>
        <div className={styles.header__headerChildren}></div>
      </header>
      <main className={[styles.main, classNames?.content].join(' ')}>
        <div
          className={[
            styles.main__textContent,
            styles.skeleton__textContent,
            classNames?.textContent,
          ].join(' ')}
        >
          <SkeletonText />
          <SkeletonText />
          <SkeletonText />
        </div>
      </main>
    </div>
  )
}

export default Comment
