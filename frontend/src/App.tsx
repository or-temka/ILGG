import { lazy, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from 'layouts/mainLayout/MainLayout'

import FloatingPanelsQueue from 'components/UI/floatingPanels/FloatingPanelsQueue/FloatingPanelsQueue'
import pageLink from 'pagesLinks'

import useInitialization from 'initialize'
import PrivateRoute from 'components/routes/PrivateRoute/PrivateRoute'

const Main = lazy(() => import('pages/mainPages/Main/Main'))
const Shop = lazy(() => import('pages/mainPages/Shop/Shop'))
const AppsLibrary = lazy(
  () => import('pages/mainPages/AppsLibrary/AppsLibrary')
)
const Inventory = lazy(
  () => import('pages/mainPages/UserInventory/UserInventory')
)
const Marketplace = lazy(
  () => import('pages/mainPages/Marketplace/Marketplace')
)
const PageNotFound = lazy(
  () => import('pages/mainPages/PageNotFound/PageNotFound')
)
const SignUp = lazy(() => import('pages/account/signUp/SignUp/SignUp'))
const SignUpEmail = lazy(
  () => import('pages/account/signUp/SignUpEmail/SignUpEmail')
)
const Profile = lazy(() => import('pages/account/Profile/Profile'))
const EditProfile = lazy(() => import('pages/account/EditProfile/EditProfile'))

const Game = lazy(() => import('pages/games/Game/Game'))

function App() {
  // init all data
  const initialize = useInitialization()
  useMemo(initialize, [])

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="" element={<MainLayout />}>
              {/* Unautharized pages */}
              <Route path={pageLink.main} element={<Main />}></Route>
              <Route path={pageLink.shop} element={<Shop />}></Route>
              <Route
                path={pageLink.marketplace}
                element={<Marketplace />}
              ></Route>

              {/* application pages */}
              <Route path={pageLink.game + ':id'} element={<Game />}></Route>

              <Route
                path={pageLink.signUpEmail}
                element={<SignUpEmail />}
              ></Route>
              <Route path={pageLink.signUp} element={<SignUp />}></Route>
              <Route
                path={pageLink.profile + ':id'}
                element={<Profile />}
              ></Route>

              {/* Authorized pages */}
              <Route element={<PrivateRoute />}>
                <Route
                  path={pageLink.appsLibrary}
                  element={<AppsLibrary />}
                ></Route>
                <Route
                  path={pageLink.inventory}
                  element={<Inventory />}
                ></Route>

                {/* profile pages */}
                <Route
                  path={pageLink.editProfile}
                  element={<EditProfile />}
                ></Route>
              </Route>

              <Route path="*" index element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

      {/* Floating Panels */}
      <FloatingPanelsQueue />
    </>
  )
}

export default App
