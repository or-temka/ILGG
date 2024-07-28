import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const Main = lazy(() => import('pages/mainPages/Main/Main'))

function MainPages() {
  return (
    <>
      <Route path={pageLink.main} element={<Main />}></Route>
    </>
  )
}

export default MainPages
