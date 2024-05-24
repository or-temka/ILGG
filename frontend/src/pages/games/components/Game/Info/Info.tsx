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
      <div>
        <AboutGameText />
        <MinSystemRequirements />
        <Comments />
      </div>
      <div>
        <ScreenSharingInfo />
        <Categories />
        <Tags />
        <LanguageSupport />
      </div>
    </div>
  )
}

export default Info
