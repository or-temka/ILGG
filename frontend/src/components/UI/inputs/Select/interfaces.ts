import { SelectHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'

interface IOption<T> {
  value: T
  label: string
}

export interface SelectProps<T>
  extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: IOption<T>[]
  errorText?: string
  defaultValue?: string | number
  disabledNotEntered?: boolean
  notEnteredColor?: string
  onChange?: (...args: any[]) => any
  className?: string
  containerClassName?: string
  value?: string | number
  hideDefault?: boolean
  onChangeValue?: (value: string | number) => void
  register?: UseFormRegisterReturn
  [key: string]: any
}
