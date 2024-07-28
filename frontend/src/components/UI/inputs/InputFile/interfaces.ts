import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { InputFileVariant } from './enums'

export interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  setFile?: React.Dispatch<React.SetStateAction<File | null>>
  file?: File | null

  variant?: InputFileVariant
  errorText?: string

  classNames?: {
    input?: string
    placeholder?: string
    wrapper?: string
  }
  register?: UseFormRegisterReturn
  [key: string]: any
}
