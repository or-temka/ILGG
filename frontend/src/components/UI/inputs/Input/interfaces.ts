import { inputVariant } from 'components'
import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType?: string
  inputAutocomplete?: string
  label?: string
  variant?: inputVariant
  errorText?: string
  classNames?: {
    input?: string
    wrapper?: string
  }
  register?: UseFormRegisterReturn
  [key: string]: any
}
