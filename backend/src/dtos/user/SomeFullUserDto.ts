class SomeFullUserDto {
  _id
  name
  login
  isOnline
  about
  avatar
  level

  constructor(model: any) {
    this._id = model._id
    this.name = model.name
    this.login = model.login
    this.isOnline = model.isOnline
    this.about = model.about
    this.avatar =
      model.avatar === null
        ? null
        : {
            qualities: model.avatar.qualities,
          }
    this.level = model.level
  }
}

export { SomeFullUserDto }
