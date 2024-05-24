import GameControlButtons from './GameControlButtons'
import GamePhotoLibrary from './GamePhotoLibrary'
import HeaderAboutGame from './HeaderAboutGame'

import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div></div>
      <div>
        <div>
          <h2>Find Number</h2>
        </div>
        <div>
          <div>
            <GamePhotoLibrary />
          </div>
          <div>
            <div>
              <HeaderAboutGame />
            </div>
            <div>
              <GameControlButtons />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
