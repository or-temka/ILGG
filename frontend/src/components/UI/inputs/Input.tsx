import { ChangeEventHandler, MouseEventHandler, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Input.module.scss'

export enum InputVariant {
  simple = styles.input__input_simple,
  light = styles.input__input_light,
}

interface InputProps {
  value: string
  inputType?: string
  placeholder?: string
  label?: string
  variant?: InputVariant
  errorText?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>
  classNames?: {
    input?: string
    wrapper?: string
  }
}

function Input({
  value = '',
  inputType = 'text',
  placeholder = '',
  label = '',
  variant = InputVariant.simple, // types: simple, light
  errorText = '',
  onChange = () => {},
  onClick = () => {},
  classNames = {},
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
        value={value}
        type={inputType}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        className={[
          styles.input__input,
          errorText && styles.input__input_error,
          variant,
          classNames.input,
        ].join(' ')}
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
