import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

import { selectMyUser } from '../../../redux/slices/myProfile/slice'
import { PrivateRouteProps } from './interfaces'

function PrivateRoute({
  isAllowed,
  redirectPath = '/',
  children,
}: PrivateRouteProps) {
  const userData = useSelector(selectMyUser)

  if (!userData || userData.loading) {
    return <></>
  }

  const isAuthenticated = userData?.data
  let allow = isAllowed
  if (typeof isAllowed === 'undefined') {
    allow = !!isAuthenticated
  }
  if (!allow) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? <>{children}</> : <Outlet />
}

export { PrivateRoute }
