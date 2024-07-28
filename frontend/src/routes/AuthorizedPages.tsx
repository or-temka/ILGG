import { Route } from 'react-router-dom'

import PrivateRoute from 'components/routes/PrivateRoute/PrivateRoute'
import ProfilePages from './AuthorizedPages/ProfilePages'
import InventoryPages from './AuthorizedPages/InventoryPages'
import AppsLibraryPages from './AuthorizedPages/AppsLibraryPages'

function AuthorizedPages() {
  return (
    <Route element={<PrivateRoute />}>
      {ProfilePages()}
      {InventoryPages()}
      {AppsLibraryPages()}
    </Route>
  )
}

export default AuthorizedPages
