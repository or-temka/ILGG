class FullUserDto {
  _id
  email
  isActivated
  name
  login
  isOnline
  balance
  privacy
  about
  avatar

  constructor(model: any) {
    this._id = model._id
    this.email = model.email
    this.isActivated = model.isActivated
    this.name = model.name
    this.login = model.login
    this.isOnline = model.isOnline
    this.about = model.about
    this.balance = {
      value: model.balance,
      currency: 'руб.',
    }
    this.privacy = model.privacy
    this.avatar = {
      filename: model.avatar.filename,
    }
  }
}

export { FullUserDto }
