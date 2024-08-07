class SomeFullUserDto {
  _id
  name
  login
  isOnline
  about
  avatar

  constructor(model: any) {
    this._id = model._id
    this.name = model.name
    this.login = model.login
    this.isOnline = model.isOnline
    this.about = model.about
    this.avatar = {
      filename: model.avatar.filename,
    }
  }
}

export { SomeFullUserDto }
