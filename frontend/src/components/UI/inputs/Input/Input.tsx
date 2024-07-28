import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Input.module.scss'
import { InputVariant } from './enums'
import { InputProps } from './interfaces'

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
export { InputVariant }
