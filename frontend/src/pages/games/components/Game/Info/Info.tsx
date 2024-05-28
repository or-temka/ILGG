import AboutGameText from './AboutGameText'
import Categories from './Categories'
import Comments from './Comments'
import LanguageSupport from './LanguageSupport'
import MinSystemRequirements from './MinSystemRequirements'
import ScreenSharingInfo from './ScreenSharingInfo'
import Tags from './Tags'

import styles from './Info.module.scss'

function Info() {
  return (
    <div className={styles.info}>
      <main className={styles.main}>
        <AboutGameText classNames={{ wrapper: styles.main__item }} />
        <MinSystemRequirements classNames={{ wrapper: styles.main__item }} />
        <Comments classNames={{ wrapper: styles.main__item }} />
      </main>
      <aside className={styles.aside}>
        <ScreenSharingInfo classNames={{ wrapper: styles.aside__item }} />
        <Categories
          classNames={{
            wrapper: [styles.aside__item, styles.aside__item_bottomWide].join(
              ' '
            ),
          }}
        />
        <Tags classNames={{ wrapper: styles.aside__item }} />
        <LanguageSupport classNames={{ wrapper: styles.aside__item }} />
      </aside>
    </div>
  )
}

export default Info
