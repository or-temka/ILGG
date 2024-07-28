import { textAreaVariant } from 'components'
import { TextareaHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: textAreaVariant
  label?: string
  errorText?: string
  className?: string
  wrapperClassName?: string
  register?: UseFormRegisterReturn
  [key: string]: any
}
