import { useState } from 'react'
import Button, { ButtonVariant } from '../../../components/UI/buttons/Button'
import AddFriendPopUp from './components/rightMenu/AddFriendPopUp'
import FriendMiniProfile from './components/rightMenu/FriendMiniProfile'
import { UserData } from './components/rightMenu/MiniProfile'
import MyMiniProfile from './components/rightMenu/MyMiniProfile'

import menuStyles from './Menu.module.scss'
import styles from './RightMenu.module.scss'

interface RightMenuProps {
  className?: string
}

const usersData: UserData[] = [
  {
    name: 'Алина убивца',
    login: 'alina',
    isOnline: true,
    imgName: 'alina.jpg',
  },
  {
    name: 'Freevel',
    login: 'freevel',
    isOnline: true,
    imgName: 'serega.jpg',
  },
  {
    name: 'мухтар в снегу 3000',
    login: 'myhtar',
    isOnline: false,
    imgName: 'myhtar.jpg',
  },
]

function RightMenu({ className = '' }: RightMenuProps) {
  const [showPopUp, setShowPopUp] = useState({ addFriend: false })

  return (
    <>
      <aside
        className={[menuStyles.menu, styles.rightMenu, className].join(' ')}
      >
        <MyMiniProfile />
        <div className={styles.rightMenu__friendsLabel}>
          <span className={styles.rightMenu__friendsLabelText}>Друзья</span>
        </div>
        {usersData.map((userData, index) => (
          <FriendMiniProfile key={index} userData={userData} />
        ))}
        <div className={styles.rightMenu__addFriendBtnContainer}>
          <Button
            title="Добавить"
            className={styles.rightMenu__addFriendBtn}
            variant={ButtonVariant.shy}
            onClick={() =>
              setShowPopUp((prev) => ({ ...prev, addFriend: true }))
            }
          />
        </div>
      </aside>

      {/* PopUp`s */}
      {showPopUp.addFriend && (
        <AddFriendPopUp
          usersData={usersData}
          onClose={() =>
            setShowPopUp((prev) => ({ ...prev, addFriend: false }))
          }
        />
      )}
    </>
  )
}

export default RightMenu
