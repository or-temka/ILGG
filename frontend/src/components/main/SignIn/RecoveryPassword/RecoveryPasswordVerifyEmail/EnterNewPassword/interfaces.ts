export interface EnterNewPasswordForm {
  password: string
  confirmPassword: string
}

export interface EnterNewPasswordProps {
  email: string
  activationLink: string
  onClose: Function
  onCloseSingIn: Function
}
