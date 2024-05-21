import { lazy, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'
import pageLink from './pagesLinks'

import useInitialization from './initialize'

const Main = lazy(() => import('./pages/Main'))
const SignUp = lazy(() => import('./pages/account/SignUp'))
const Profile = lazy(() => import('./pages/account/Profile'))
const PageNotFound = lazy(() => import('./pages/PageNotFound'))

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

              {/* profile pages */}
              <Route path={pageLink.signUp} element={<SignUp />}></Route>
              <Route
                path={pageLink.profile + ':id'}
                element={<Profile />}
              ></Route>

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
