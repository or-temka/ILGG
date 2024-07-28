import { lazy, useMemo } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from 'layouts/mainLayout/MainLayout'
import useInitialization from 'initialize'
import UnauthorizedPages from 'routes/UnauthorizedPages'
import AuthorizedPages from 'routes/AuthorizedPages'
import { FloatingPanelsQueue } from 'components'

const PageNotFound = lazy(
  () => import('pages/mainPages/PageNotFound/PageNotFound')
)

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
              {UnauthorizedPages()}
              {AuthorizedPages()}
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
