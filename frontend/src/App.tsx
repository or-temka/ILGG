import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import PageNotFound from './pages/PageNotFound'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Main />}></Route>
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
