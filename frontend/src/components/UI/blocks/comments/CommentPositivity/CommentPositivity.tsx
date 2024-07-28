import { ReactComponent as BigLikeSVG } from 'assets/svgs/bigLike.svg'
import { CommentPositivityProps } from './interfaces'
import styles from './CommentPositivity.module.scss'

function CommentPositivity({ positive, classNames }: CommentPositivityProps) {
  return (
    <div className={[styles.positivity, classNames?.wrapper].join(' ')}>
      <BigLikeSVG
        className={[
          styles.positivity__bigLike,
          positive
            ? styles.positivity__bigLike_positive
            : styles.positivity__bigLike_notPositive,
          classNames?.svg,
        ].join(' ')}
      />
      <span className={[styles.positivity__text, classNames?.text].join(' ')}>
        {positive ? 'Положительный отзыв' : 'Отрицательный отзыв'}
      </span>
    </div>
  )
}

export { CommentPositivity }
