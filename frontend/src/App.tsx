import { lazy, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'
import pageLink from './pagesLinks'

import useInitialization from './initialize'

const Main = lazy(() => import('./pages/Main'))
const Shop = lazy(() => import('./pages/Shop'))
const AppsLibrary = lazy(() => import('./pages/AppsLibrary'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

const SignUp = lazy(() => import('./pages/account/SignUp'))
const Profile = lazy(() => import('./pages/account/Profile'))
const EditProfile = lazy(() => import('./pages/account/EditProfile'))

const Game = lazy(() => import('./pages/games/Game'))

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
              <Route path={pageLink.main} element={<Main />}></Route>
              <Route path={pageLink.shop} element={<Shop />}></Route>
              <Route path={pageLink.appsLibrary} element={<AppsLibrary />}></Route>

              {/* profile pages */}
              <Route path={pageLink.signUp} element={<SignUp />}></Route>
              <Route
                path={pageLink.profile + ':id'}
                element={<Profile />}
              ></Route>
              <Route
                path={pageLink.editProfile}
                element={<EditProfile />}
              ></Route>

              {/* application pages */}
              <Route path={pageLink.game + ':id'} element={<Game />}></Route>

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
