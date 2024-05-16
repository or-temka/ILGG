import { useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import useInitialization from './initialize'

import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import PageNotFound from './pages/PageNotFound'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'
import pageLink from './pagesLinks'

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
