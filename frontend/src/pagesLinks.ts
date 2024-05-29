const enum pageLink {
  // main pages (from menu)
  main = '/',
  shop = '/shop',
  appsLibrary = '/library',
  inventory = '/inventory',
  marketplace = '/marketplace',
  friends = '/friends',
  help = '/help',

  // account
  signUp = '/sign-up',
  profile = '/profile/', // /proile/:id
  editProfile = '/edit-profile/',

  // applications
  applicationPage = '/app/', // /app/:id
  game = '/game/', // /game/:id

  // seconds
  privacy = '/help/privacy-policy',
  legal = '/help/legal-info',
}

export default pageLink
