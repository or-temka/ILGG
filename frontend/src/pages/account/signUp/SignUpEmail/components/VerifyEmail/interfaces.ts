export interface VerifyEmailForm {
  code: string
}

export interface VerifyEmailProps {
  onClose: Function
  email: string
}