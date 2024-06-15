import { useState } from 'react'

import PopUpContainer from 'components/UI/popUps/skeletons/PopUpContainer'
import Input from 'components/UI/inputs/Input'
import MiniProfile from '../components/miniProfile/MiniProfile'
import { IUserProfile } from 'models/user/IUserProfile'

import styles from './AddFriendPopUp.module.scss'

interface AddFriendPopUpProps {
  usersData: IUserProfile[] | []
  onClose?: (...args: any[]) => any
}

function AddFriendPopUp({ usersData, onClose }: AddFriendPopUpProps) {
  const [searchValue, setSearchValue] = useState<string>('')

  return (
    <PopUpContainer
      classNames={{
        className: styles.popUp,
        contentClassName: styles.popUp__content,
        wrapperClassName: styles.popUp__popUpWrapper,
      }}
      onClose={onClose}
    >
      <div className={styles.popUp__label}>Добавление в друзья</div>
      <div className={styles.popUp__main}>
        <div className={styles.popUp__search}>
          <Input
            label="Поиск:"
            placeholder="Введите имя пользователя"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        <div className={styles.popUp__searchResult}>
          {usersData.map((userData, index) => (
            <MiniProfile
              key={index}
              buttons={[]}
              userData={userData}
              classNames={{ wrapper: styles.popUp__profile }}
              iconComponent={
                <div className={styles.popUp__addFriendButtonWrapper}>
                  <div className={styles.popUp__addFriendButton}></div>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </PopUpContainer>
  )
}

export default AddFriendPopUp
