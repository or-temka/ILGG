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
        <ScreenSharingInfo />
        <Categories />
        <Tags />
        <LanguageSupport />
      </aside>
    </div>
  )
}

export default Info
