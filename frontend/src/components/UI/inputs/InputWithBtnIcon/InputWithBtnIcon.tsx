import { ChangeEventHandler, MouseEventHandler, ReactNode, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import btnStyles from '../Input/Input.module.scss'
import styles from './InputWithBtnIcon.module.scss'

export enum InputWithBtnIconVariant {
  simple = 'simple',
  light = 'light',
}

interface InputWithBtnIconProps {
  value: string
  input?: {
    type?: React.HTMLInputTypeAttribute
    name?: string
    autocomplete?: string
  }
  placeholder?: string
  label?: string
  variant?: InputWithBtnIconVariant
  errorText?: string
  svgComponent?: ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLDivElement>
  onClickBtnIcon?: (input: ParentNode | null) => void
  className?: string
  wrapperClassName?: string
}

function InputWithBtnIcon({
  value = '',
  input = {},
  placeholder = '',
  label = '',
  variant = InputWithBtnIconVariant.simple,
  errorText = '',
  svgComponent,
  onChange = () => {},
  onClick = () => {},
  onClickBtnIcon = () => {},
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
          type={input.type || 'text'}
          name={input.name}
          autoComplete={input.autocomplete}
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
            onClick={(event) => onClickBtnIcon(event.currentTarget.parentNode)}
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
