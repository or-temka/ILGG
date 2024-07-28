import ApplicationsPages from './UnauthorizedPages/ApplicationsPages'
import MainPages from './UnauthorizedPages/MainPages'
import MarketplacePages from './UnauthorizedPages/MarketplacePages'
import ProfilePages from './UnauthorizedPages/ProfilePages'
import ShopPages from './UnauthorizedPages/ShopPages'
import SignUpPages from './UnauthorizedPages/SignUpPages'

function UnauthorizedPages() {
  return (
    <>
      {MainPages()}
      {ProfilePages()}
      {SignUpPages()}
      {ApplicationsPages()}
      {MarketplacePages()}
      {ShopPages()}
    </>
  )
}

export default UnauthorizedPages
