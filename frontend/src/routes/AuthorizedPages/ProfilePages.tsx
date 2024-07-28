import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const EditProfile = lazy(() => import('pages/account/EditProfile/EditProfile'))

function ProfilePages() {
  return (
    <>
      <Route path={pageLink.editProfile} element={<EditProfile />}></Route>
    </>
  )
}

export default ProfilePages
