import AboutGameText from './AboutGameText/AboutGameText'
import Categories from './Categories/Categories'
import Comments from './Comments/Comments'
import LanguageSupport from './LanguageSupport/LanguageSupport'
import MinSystemRequirements from './MinSystemRequirements/MinSystemRequirements'
import ScreenSharingInfo from './ScreenSharingInfo/ScreenSharingInfo'
import Tags from './Tags/Tags'
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
