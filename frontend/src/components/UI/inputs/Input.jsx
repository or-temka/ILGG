import { v4 as uuidv4 } from 'uuid'

import styles from './Input.module.scss'
import { useMemo, useRef, useState } from 'react'

function Input({
  placeholder = '',
  value = '',
  label = '',
  type = 'simple', // types: simple, light
  errorText = '',
  onChange = () => {},
  onClick = () => {},
  className = '',
  wrapperClassName = '',
  ...params
}) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div className={[styles.input, wrapperClassName].join(' ')}>
      {label && (
        <label htmlFor={htmlIdRef.current} className={styles.input__label}>
          {label}
        </label>
      )}
      <input
        {...params}
        id={htmlIdRef.current}
        value={value}
        onChange={onChange}
        onClick={onClick}
        placeholder={placeholder}
        className={[
          styles.input__input,
          errorText && styles.input__input_error,
          type === 'light'
            ? styles.input__input_light
            : styles.input__input_simple,
          className,
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
