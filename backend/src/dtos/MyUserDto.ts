class UserDto {
  email
  id
  isActivated
  name
  login
  isOnline
  balance

  constructor(model: any) {
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
    this.name = model.name
    this.login = model.login
    this.isOnline = model.isOnline
    this.balance = {
      value: model.balance,
      currency: 'руб.',
    }
  }
}

export default UserDto
