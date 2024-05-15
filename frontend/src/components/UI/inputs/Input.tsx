import { ChangeEventHandler, MouseEventHandler, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Input.module.scss'

export enum Variant {
  simple = 'simple',
  light = 'light',
}

interface InputProps {
  value: string
  placeholder?: string
  label?: string
  variant?: Variant
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
  placeholder = '',
  label = '',
  variant = Variant.simple, // types: simple, light
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
        type="text"
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        className={[
          styles.input__input,
          errorText && styles.input__input_error,
          variant === 'light'
            ? styles.input__input_light
            : styles.input__input_simple,
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
