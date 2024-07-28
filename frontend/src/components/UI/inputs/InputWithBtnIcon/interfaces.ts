import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

import { InputWithBtnIconVariant } from './enums'

export interface InputWithBtnIconProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  variant?: InputWithBtnIconVariant
  errorText?: string
  svgComponent?: ReactNode
  onClickBtnIcon?: (input: ParentNode | null) => void
  className?: string
  wrapperClassName?: string
  register?: UseFormRegisterReturn
  [key: string]: any
}
