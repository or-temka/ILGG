export interface RecoveryPasswordVerifyEmailForm {
  activationCode: string
}

export interface VerifyEmailProps {
  onClose: Function
  emailOrLogin: string
  onCloseSignIn: Function
}