import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const Inventory = lazy(
  () => import('pages/mainPages/UserInventory/UserInventory')
)

function InventoryPages() {
  return (
    <>
      <Route path={pageLink.inventory} element={<Inventory />}></Route>
    </>
  )
}

export default InventoryPages
