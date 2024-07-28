import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const Game = lazy(() => import('pages/games/Game/Game'))

function ApplicationsPages() {
  return (
    <>
      <Route path={pageLink.game + ':id'} element={<Game />}></Route>
    </>
  )
}

export default ApplicationsPages
