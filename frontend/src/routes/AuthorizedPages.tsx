import { Route } from 'react-router-dom'

import ProfilePages from './AuthorizedPages/ProfilePages'
import InventoryPages from './AuthorizedPages/InventoryPages'
import AppsLibraryPages from './AuthorizedPages/AppsLibraryPages'
import { PrivateRoute } from 'components'

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
