import { useState } from 'react'
import { useSelector } from 'react-redux'

import { selectFriends } from '../../../redux/slices/friendsSlice'
import { IUserProfile } from '../../../interfaces/userProfile'
import { selectUser } from '../../../redux/slices/myProfileSlice'

import Button, { ButtonVariant } from '../../../components/UI/buttons/Button'
import AddFriendPopUp from './components/rightMenu/AddFriendPopUp'
import FriendMiniProfile from './components/rightMenu/FriendMiniProfile'
import MyMiniProfile from './components/rightMenu/MyMiniProfile'
import SignIn from '../../../components/main/SignIn/SignIn'
import TextLink from '../../../components/UI/links/TextLink'
import pageLink from '../../../pagesLinks'
import { ReactComponent as SignInDoorSVG } from '../../../assets/svgs/door.svg'

import menuStyles from './Menu.module.scss'
import styles from './RightMenu.module.scss'

interface RightMenuProps {
  className?: string
}

const usersData: IUserProfile[] = [
  {
    id: 1,
    name: 'Алина убивца',
    login: 'alina',
    isOnline: true,
    imgName: 'alina.jpg',
  },
  {
    id: 2,
    name: 'Freevel',
    login: 'freevel',
    isOnline: true,
    imgName: 'serega.jpg',
  },
  {
    id: 3,
    name: 'мухтар в снегу 3000',
    login: 'myhtar',
    isOnline: false,
    imgName: 'myhtar.jpg',
  },
]

function RightMenu({ className = '' }: RightMenuProps) {
  const [showPopUp, setShowPopUp] = useState({
    addFriend: false,
    signIn: false,
  })

  const mySelectedUser = useSelector(selectUser)
  const friends = useSelector(selectFriends)

  const notLogIn = !mySelectedUser.loading && mySelectedUser.data === null

  // Если не входил в аккаунт
  if (notLogIn) {
    return (
      <>
        <aside
          className={[menuStyles.menu, styles.rightMenu, className].join(' ')}
        >
          <div className={styles.notSignIn}>
            <div className={styles.notSignIn__label}>
              <span
                onClick={() =>
                  setShowPopUp((prev) => ({ ...prev, signIn: true }))
                }
                className={styles.notSignIn__signInBtn}
              >
                Войдите
              </span>{' '}
              или{' '}
              <TextLink
                to={pageLink.signUp}
                className={styles.notSignIn__signUpBtn}
              >
                создайте аккаунт
              </TextLink>
            </div>
            <div className={styles.notSignIn__svgContainer}>
              <SignInDoorSVG />
            </div>
          </div>
        </aside>

        {showPopUp.signIn && (
          <SignIn
            onClose={() => setShowPopUp((prev) => ({ ...prev, signIn: false }))}
          />
        )}
      </>
    )
  }

  return (
    <>
      <aside
        className={[menuStyles.menu, styles.rightMenu, className].join(' ')}
      >
        <MyMiniProfile myUserData={mySelectedUser.data} />

        <div className={styles.rightMenu__friendsLabel}>
          <span className={styles.rightMenu__friendsLabelText}>Друзья</span>
        </div>

        {!friends ? ( //Friends
          <>
            <FriendMiniProfile userData={null} />
            <FriendMiniProfile userData={null} />
            <FriendMiniProfile userData={null} />
            <FriendMiniProfile userData={null} />
            <FriendMiniProfile userData={null} />
          </>
        ) : friends.length > 0 ? (
          friends.map((userData, index) => (
            <FriendMiniProfile key={index} userData={userData} />
          ))
        ) : (
          <div className={styles.rightMenu__withoutFriends}>
            <span className={styles.rightMenu__withoutFriendsLabel}>
              У вас нет друзей
            </span>
          </div>
        )}

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

      {showPopUp.signIn && (
        <SignIn
          onClose={() => setShowPopUp((prev) => ({ ...prev, signIn: false }))}
        />
      )}
    </>
  )
}

export default RightMenu
