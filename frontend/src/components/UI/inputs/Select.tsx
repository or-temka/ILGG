import {
  ChangeEvent,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from 'react'

import styles from './Select.module.scss'

interface IOption {
  value: string | number
  label: string
}

interface SelectProps {
  options: IOption[]
  placeholder?: string
  errorText?: string
  defaultValue?: string | number
  disabledNotEntered?: boolean
  notEnteredColor?: string
  onClick?: MouseEventHandler<HTMLSelectElement>
  onChange?: (...args: any[]) => any
  className?: string
  containerClassName?: string
}

function Select({
  options = [],
  placeholder = 'Выберите...',
  errorText = '',
  defaultValue = 'default',
  disabledNotEntered = false,
  notEnteredColor = 'var(--text-color)',
  onClick = () => {},
  onChange = () => {},
  className = '',
  containerClassName = '',
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState(defaultValue)

  const onChangeHandler: ChangeEventHandler<HTMLSelectElement> = (
    e: ChangeEvent<HTMLSelectElement>
  ) => {
    const value: string = e.target.value
    onChange(value)
    setSelectedValue(value)
  }

  return (
    <div className={[styles.select, containerClassName].join(' ')}>
      <select
        onClick={onClick}
        onChange={onChangeHandler}
        className={[
          styles.select__select,
          className,
          errorText && styles.select__select_error,
        ].join(' ')}
        value={selectedValue}
      >
        <option
          value="default"
          className={styles.select__option}
          disabled={disabledNotEntered}
          style={{ color: notEnteredColor }}
        >
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className={styles.select__option}
          >
            {option.label}
          </option>
        ))}
      </select>
      {errorText && (
        <span className={['small-text', styles.select__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default Select
