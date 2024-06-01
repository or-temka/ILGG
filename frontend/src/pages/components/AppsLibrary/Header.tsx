import { useState } from 'react'

import { ViewAppsType } from '../../AppsLibrary'

import Input from '../../../components/UI/inputs/Input'
import { ReactComponent as ListPapersSVG } from '../../../assets/svgs/listsPapers.svg'
import { ReactComponent as TilesSVG } from '../../../assets/svgs/tiles.svg'
import Tooltip, {
  VerticalDirection,
} from '../../../components/UI/tooltips/Tooltip'

import styles from './Header.module.scss'

interface HeaderProps {
  viewAppsType: ViewAppsType
  onChangeViewAppTypes: (viewType: ViewAppsType) => void
  classNames?: {
    wrapper?: string
  }
}

function Header({
  viewAppsType,
  onChangeViewAppTypes,
  classNames,
}: HeaderProps) {
  const [searchInputVal, setSearchInputVal] = useState<string>('')

  return (
    <header className={[styles.header, classNames?.wrapper].join(' ')}>
      <div className={styles.header__manage}>
        <div className={styles.header__labelContainer}>
          <h2 className={styles.header__label}>Мои игры и приложения</h2>
          <span className={styles.header__appsCount}>6</span>
        </div>
        <div className={styles.header__manageBtns}>
          <Tooltip
            postitionVertical={VerticalDirection.bottom}
            text="Список приложений"
          >
            <button
              className={[
                styles.header__manageBtn,
                styles.header__manageBtn_list,
                viewAppsType === 'list' ? styles.header__manageBtn_active : '',
              ].join(' ')}
              onClick={() => onChangeViewAppTypes('list')}
            >
              <ListPapersSVG />
            </button>
          </Tooltip>
          <Tooltip
            postitionVertical={VerticalDirection.bottom}
            text="Большие значки"
          >
            <button
              className={[
                styles.header__manageBtn,
                styles.header__manageBtn_bigPicture,
                viewAppsType === 'bigPictures'
                  ? styles.header__manageBtn_active
                  : '',
              ].join(' ')}
              onClick={() => onChangeViewAppTypes('bigPictures')}
            >
              <TilesSVG />
            </button>
          </Tooltip>
        </div>
      </div>
      <div className={styles.header__searchBlock}>
        <Input
          value={searchInputVal}
          onChange={(e) => setSearchInputVal(e.target.value)}
          placeholder="Введите название"
          classNames={{
            wrapper: styles.header__searchInputWrapper,
            input: styles.header__searchInput,
          }}
        />
      </div>
    </header>
  )
}

export default Header
