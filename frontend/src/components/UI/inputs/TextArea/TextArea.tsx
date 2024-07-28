import { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { variant as textAreaVariant } from './enums'
import { TextAreaProps } from './interfaces'
import styles from './TextArea.module.scss'

function TextArea({
  variant = textAreaVariant.simple,
  label = '',
  errorText = '',
  className = '',
  wrapperClassName = '',
  register,
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
        {...register}
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

export { TextArea, textAreaVariant }
