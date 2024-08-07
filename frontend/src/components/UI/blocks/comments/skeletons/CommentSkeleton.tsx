import { CommentProps } from './interfaces'
import { SkeletonText, skeletonTextVariant } from 'components'
import styles from '../Comment/Comment.module.scss'

function CommentSkeleton({ background = true, classNames }: CommentProps) {
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
              'pulse-light',
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
                'pulse-light',
                classNames?.authorName,
              ].join(' ')}
            ></div>
            <div
              className={[
                styles.header__dateCreate,
                styles.skeleton__dateCreate,
                'pulse-light',
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
          <SkeletonText variant={skeletonTextVariant.light} />
          <SkeletonText variant={skeletonTextVariant.light} />
          <SkeletonText variant={skeletonTextVariant.light} />
        </div>
      </main>
    </div>
  )
}

export { CommentSkeleton }
