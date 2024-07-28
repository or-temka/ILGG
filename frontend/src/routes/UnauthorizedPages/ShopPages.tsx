import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const Shop = lazy(() => import('pages/mainPages/Shop/Shop'))

function ShopPages() {
  return (
    <>
      <Route path={pageLink.shop} element={<Shop />}></Route>
    </>
  )
}

export default ShopPages
