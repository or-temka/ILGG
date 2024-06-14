export interface RecoveryEmailError {
  errorMsg: string
}

export interface sendRecoveryActivationCodeResponse {
  activationLink: string
  email: string
}
