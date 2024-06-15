import SkeletonText, {
  SkeletonTextVariant,
} from 'components/skeletons/SkeletonText'
import Button from 'components/UI/buttons/Button'

import styles from '../Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__mainInfo}>
        <div
          className={[
            'pulse-light',
            styles.header__userImg,
            styles.skeleton__userImg,
          ].join(' ')}
        />
        <div
          className={[styles.header__textInfo, styles.skeleton__textInfo].join(
            ' '
          )}
        >
          <div
            className={[
              'pulse-light',
              styles.header__username,
              styles.skeleton__username,
            ].join(' ')}
          ></div>
          <div
            className={[
              styles.header__aboutUserInfo,
              styles.skeleton__aboutUserInfo,
            ].join(' ')}
          >
            <SkeletonText variant={SkeletonTextVariant.light} />
            <SkeletonText variant={SkeletonTextVariant.light} />
            <SkeletonText variant={SkeletonTextVariant.light} />
          </div>
        </div>
      </div>

      <div className={styles.header__adopt}>
        <div
          className={[
            styles.header__lvlContainer,
            styles.skeleton__lvlContainer,
          ].join(' ')}
        >
          <div className={styles.header__lvlInfo}>
            <span
              className={[
                'pulse-light',
                styles.header__lvlValue,
                styles.skeleton__lvlValue,
              ].join(' ')}
            ></span>
            <span
              className={[
                'pulse-light',
                styles.header__lvlProgressText,
                styles.skeleton__lvlProgressText,
              ].join(' ')}
            ></span>
          </div>
          <div
            className={['pulse-light', styles.skeleton__lvlProgressLine].join(
              ' '
            )}
          ></div>
        </div>
        <Button title="Редактировать профиль" />
      </div>
    </header>
  )
}

export default Header
