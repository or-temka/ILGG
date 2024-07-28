import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { InputVariant } from './enums'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: string
  inputAutocomplete?: string
  label?: string
  variant?: InputVariant
  errorText?: string
  classNames?: {
    input?: string
    wrapper?: string
  }
  register?: UseFormRegisterReturn
  [key: string]: any
}
