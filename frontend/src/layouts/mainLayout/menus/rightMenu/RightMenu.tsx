import { Suspense, lazy, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectFriends } from '../../../../redux/slices/friendsSlice/slice'
import { selectMyUser } from '../../../../redux/slices/myProfile/slice'
import AddFriendPopUp from './addFriendPopUp/AddFriendPopUp'
import FriendMiniProfile from './friendMiniProfile/FriendMiniProfile'
import MyMiniProfile from './myMiniProfile/MyMiniProfile'
import pageLink from 'pagesLinks'
import LoadingRightMenu from './loadingRightMenu/LoadingRightMenu'
import { ReactComponent as SignInDoorSVG } from 'assets/svgs/door.svg'
import menuStyles from '../Menu.module.scss'
import { RightMenuProps } from './interfaces'
import { useScrollVisibility } from 'hooks'
import { user } from 'models'
import {
  Button,
  buttonVariant,
  LoadingPopUp,
  ScrollableContainer,
  TextLink,
} from 'components'
import styles from './RightMenu.module.scss'

const SignIn = lazy(() =>
  import('components').then((module) => ({ default: module.SignIn }))
)

const usersData: user.IUserProfile[] = [
  {
    _id: 1,
    name: 'Алина убивца',
    login: 'alina',
    isOnline: true,
    imgName: 'alina.jpg',
    avatar: null,
  },
  {
    _id: 2,
    name: 'Freevel',
    login: 'freevel',
    isOnline: true,
    imgName: 'serega.jpg',
    avatar: null,
  },
  {
    _id: 3,
    name: 'мухтар в снегу 3000',
    login: 'myhtar',
    isOnline: false,
    imgName: 'myhtar.jpg',
    avatar: null,
  },
]

function RightMenu({ className = '' }: RightMenuProps) {
  const [showPopUp, setShowPopUp] = useState({
    addFriend: false,
    signIn: false,
  })
  const friendsContainerRef = useRef(null)
  const isScrolling = useScrollVisibility(friendsContainerRef)

  const mySelectedUser = useSelector(selectMyUser)

  const friends = useSelector(selectFriends).data

  const notLogIn = !mySelectedUser.loading && mySelectedUser.data === null

  // Загрузка
  if (mySelectedUser.loading) {
    return (
      <aside
        className={[menuStyles.menu, styles.rightMenu, className].join(' ')}
      >
        <LoadingRightMenu />
      </aside>
    )
  }

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
                to={pageLink.signUpEmail}
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
          <Suspense fallback={<LoadingPopUp />}>
            <SignIn
              onClose={() =>
                setShowPopUp((prev) => ({ ...prev, signIn: false }))
              }
            />
          </Suspense>
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

        <ScrollableContainer className={styles.rightMenu__friends}>
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
        </ScrollableContainer>

        <div className={styles.rightMenu__addFriendBtnContainer}>
          <Button
            title="Добавить"
            className={styles.rightMenu__addFriendBtn}
            variant={buttonVariant.shy}
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
