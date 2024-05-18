import { useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import SignUp from './pages/account/SignUp'
import Profile from './pages/account/Profile'
import PageNotFound from './pages/PageNotFound'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'
import pageLink from './pagesLinks'

import useInitialization from './initialize'

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
              <Route path={pageLink.profile} element={<Profile />}></Route>

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
