import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const AppsLibrary = lazy(
  () => import('pages/mainPages/AppsLibrary/AppsLibrary')
)

function AppsLibraryPages() {
  return (
    <>
      <Route path={pageLink.appsLibrary} element={<AppsLibrary />}></Route>
    </>
  )
}

export default AppsLibraryPages
