import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import PageNotFound from './pages/PageNotFound'

import FloatingPanelsQueue from './components/UI/floatingPanels/FloatingPanelsQueue'
import FloatingNotification from './components/UI/floatingPanels/FloatingNotification'

function App() {
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
            <Route path="/" element={<MainLayout />}>
              <Route
                index
                element={
                  <Main addNewFloatingPanel={addNewFloatingPanelHandler} />
                }
              ></Route>
              <Route path="*" index element={<PageNotFound />}></Route>
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
