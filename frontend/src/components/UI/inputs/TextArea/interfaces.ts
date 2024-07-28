import { TextareaHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { Variant } from './enums'

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: Variant
  label?: string
  errorText?: string
  className?: string
  wrapperClassName?: string
  register?: UseFormRegisterReturn
  [key: string]: any
}
