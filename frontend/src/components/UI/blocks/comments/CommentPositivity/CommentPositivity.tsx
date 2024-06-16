import { ReactComponent as BigLikeSVG } from 'assets/svgs/bigLike.svg'

import styles from './CommentPositivity.module.scss'

interface CommentPositivityProps {
  positive?: boolean
  classNames?: {
    wrapper?: string
    svg?: string
    text?: string
  }
}

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

export default CommentPositivity
