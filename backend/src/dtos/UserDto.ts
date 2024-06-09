class UserDto {
  email: undefined
  id: undefined
  isActivated: undefined

  constructor(model: any) {
    this.email = model.email
    this.id = model._id
    this.isActivated = model.isActivated
  }
}

export default UserDto
