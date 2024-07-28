import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const SignUp = lazy(() => import('pages/account/signUp/SignUp/SignUp'))
const SignUpEmail = lazy(
  () => import('pages/account/signUp/SignUpEmail/SignUpEmail')
)

function SignUpPages() {
  return (
    <>
      <Route path={pageLink.signUpEmail} element={<SignUpEmail />}></Route>
      <Route path={pageLink.signUp} element={<SignUp />}></Route>
    </>
  )
}

export default SignUpPages
