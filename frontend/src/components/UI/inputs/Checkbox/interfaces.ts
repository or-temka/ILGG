import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  className?: string
  register?: UseFormRegisterReturn
  [key: string]: any
}
