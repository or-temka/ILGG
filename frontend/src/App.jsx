import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import MainLayout from './layouts/MainLayout'
import UserLayout from './layouts/UserLayout'
import Main from './pages/Main'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'
import FloatingNotification from './components/UI/floatingPanels/FloatingNotification'

import { SITE_NAME } from './variables'

function App() {
  // set page name
  const [pageName, setPageName] = useState('')
  useEffect(() => {
    document.title = pageName ? SITE_NAME + ' | ' + pageName : SITE_NAME
  }, [pageName])

  // for floating panels queue
  const [deletItemId, setDeleteItemId] = useState()
  const [floatingPanels, setFloatingPanels] = useState([])

  const addNewFloatingPanelHandler = (text = '', lifeTime = 0) => {
    const id = uuidv4()
    setFloatingPanels((prev) => [
      ...prev,
      {
        id,
        item: (
          <FloatingNotification
            text={text}
            onClose={() => setDeleteItemId(id)}
          />
        ),
        ...(lifeTime ? { lifeTime } : {}),
      },
    ])
  }

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout pageName={pageName} />}>
              <Route
                index
                element={
                  <Main
                    setPageName={setPageName}
                    addNewFloatingPanel={addNewFloatingPanelHandler}
                  />
                }
              ></Route>
            </Route>
            {/* <Route
            path="*"
            element={<PageNotFound setPageName={setPageName} />}
          ></Route> */}
          </Routes>
        </div>
      </BrowserRouter>

      {/* Floating Panels */}
      <FloatingPanelsQueue
        queue={floatingPanels}
        setQueue={setFloatingPanels}
        deleteItemId={deletItemId}
      />
    </>
  )
}

export default App
