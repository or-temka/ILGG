import { inputWithBtnIconVariant } from 'components'
import { InputHTMLAttributes, ReactNode } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

export interface InputWithBtnIconProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  variant?: inputWithBtnIconVariant
  errorText?: string
  svgComponent?: ReactNode
  onClickBtnIcon?: (input: ParentNode | null) => void
  className?: string
  wrapperClassName?: string
  register?: UseFormRegisterReturn
  [key: string]: any
}
