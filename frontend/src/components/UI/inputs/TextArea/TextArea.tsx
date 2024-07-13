import { TextareaHTMLAttributes, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './TextArea.module.scss'

export enum Variant {
  simple = 'simple',
  light = 'light',
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: Variant
  label?: string
  errorText?: string
  className?: string
  wrapperClassName?: string
  [key: string]: any
}

function TextArea({
  variant = Variant.simple,
  label = '',
  errorText = '',
  className = '',
  wrapperClassName = '',
  ...restProps
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
        className={[
          styles.textArea__input,
          variant === 'simple'
            ? styles.textArea__input_simple
            : styles.textArea__input_light,
          errorText ? styles.textArea__input_error : '',
          className,
        ].join(' ')}
        {...restProps}
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
