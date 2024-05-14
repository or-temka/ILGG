import { ChangeEventHandler, MouseEventHandler, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './TextArea.module.scss'

export enum Variant {
  simple = 'simple',
  light = 'light',
}

interface TextAreaProps {
  value: string
  placeholder?: string
  variant?: Variant
  label?: string
  errorText?: string
  cols?: number
  rows?: number
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  onClick?: MouseEventHandler<HTMLTextAreaElement>
  className?: string
  wrapperClassName?: string
}

function TextArea({
  value = '',
  placeholder = '',
  variant = Variant.simple,
  label = '',
  errorText = '',
  cols = 45,
  rows = 5,
  onChange = () => {},
  onClick = () => {},
  className = '',
  wrapperClassName = '',
}: TextAreaProps) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div className={[styles.textArea, wrapperClassName].join(' ')}>
      {label && (
        <label htmlFor={htmlIdRef.current} className={styles.textArea__label}>
          {label}
        </label>
      )}
      <textarea
        id={htmlIdRef.current}
        cols={cols}
        rows={rows}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        className={[
          styles.textArea__input,
          variant === 'simple'
            ? styles.textArea__input_simple
            : styles.textArea__input_light,
          errorText ? styles.textArea__input_error : '',
          className,
        ].join(' ')}
      ></textarea>
      {errorText && (
        <span className={['small-text', styles.textArea__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default TextArea
