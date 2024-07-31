import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const Profile = lazy(() => import('pages/account/Profile/Profile'))

function ProfilePages() {
  return (
    <>
      <Route path={pageLink.profile + ':login'} element={<Profile />}></Route>
    </>
  )
}

export default ProfilePages
