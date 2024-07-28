import { Route } from 'react-router-dom'
import { lazy } from 'react'

import pageLink from 'pagesLinks'

const Marketplace = lazy(
  () => import('pages/mainPages/Marketplace/Marketplace')
)

function MarketplacePages() {
  return (
    <>
      <Route path={pageLink.marketplace} element={<Marketplace />}></Route>
    </>
  )
}

export default MarketplacePages
