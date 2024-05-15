import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import PageNotFound from './pages/PageNotFound'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'
import FloatingNotification from './components/UI/floatingPanels/FloatingNotification'

import { SITE_NAME } from './variables'

function App() {
  // set page name
  const [pageName, setPageName] = useState<string | null>('')
  useEffect(() => {
    document.title = pageName ? SITE_NAME + ' | ' + pageName : SITE_NAME
  }, [pageName])

  // for floating panels queue
  const [deletItemId, setDeleteItemId] = useState<number | string>()
  const [floatingPanels, setFloatingPanels] = useState<[]>([])

  const addNewFloatingPanelHandler = (text = '', lifeTime = 0) => {
    const id = uuidv4()
    setFloatingPanels((prev: any): any => [
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
              <Route
                path="*"
                index
                element={<PageNotFound setPageName={setPageName} />}
              ></Route>
            </Route>
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
