import { InputHTMLAttributes, useRef } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import styles from './Input.module.scss'

export enum InputVariant {
  simple = styles.input__input_simple,
  light = styles.input__input_light,
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
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

function Input({
  inputType = 'text',
  label = '',
  inputAutocomplete,
  variant = InputVariant.simple, // types: simple, light
  errorText = '',
  classNames = {},
  register,
  ...restProps
}: InputProps) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div className={[styles.input, classNames.wrapper].join(' ')}>
      {label && (
        <label htmlFor={htmlIdRef.current} className={styles.input__label}>
          {label}
        </label>
      )}
      <input
        id={htmlIdRef.current}
        type={inputType}
        autoComplete={inputAutocomplete}
        className={[
          styles.input__input,
          errorText && styles.input__input_error,
          variant,
          classNames.input,
        ].join(' ')}
        {...register}
        {...restProps}
      />
      {errorText && (
        <span className={['small-text', styles.input__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default Input
