import { ChangeEventHandler, MouseEventHandler, ReactNode, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import btnStyles from './Input.module.scss'
import styles from './InputWithBtnIcon.module.scss'

export enum Variant {
  simple = 'simple',
  light = 'light',
}

interface InputWithBtnIconProps {
  value: string
  placeholder?: string
  label?: string
  variant?: Variant
  errorText?: string
  svgComponent?: ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  wrapperClassName?: string
}

function InputWithBtnIcon({
  value = '',
  placeholder = '',
  label = '',
  variant = Variant.simple,
  errorText = '',
  svgComponent,
  onChange = () => {},
  onClick = () => {},
  className = '',
  wrapperClassName = '',
}: InputWithBtnIconProps) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div
      className={[btnStyles.input, wrapperClassName].join(' ')}
      onClick={onClick}
    >
      {label && (
        <label htmlFor={htmlIdRef.current} className={btnStyles.input__label}>
          {label}
        </label>
      )}
      <div className={styles.input__inputContainer}>
        <input
          id={htmlIdRef.current}
          value={value}
          type="text"
          onChange={onChange}
          placeholder={placeholder}
          className={[
            btnStyles.input__input,
            styles.input__input,
            errorText && btnStyles.input__input_error,
            variant === 'light'
              ? btnStyles.input__input_light
              : btnStyles.input__input_simple,
            className,
          ].join(' ')}
        />
        {svgComponent && (
          <div
            className={[
              styles.input__inputBtn,
              variant === 'light'
                ? styles.input__inputBtn_light
                : styles.input__inputBtn_simple,
            ].join(' ')}
          >
            {svgComponent}
          </div>
        )}
      </div>

      {errorText && (
        <span className={['small-text', btnStyles.input__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default InputWithBtnIcon
