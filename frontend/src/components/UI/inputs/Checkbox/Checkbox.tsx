import { ChangeEventHandler, MouseEventHandler, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import styles from './Checkbox.module.scss'

interface CheckboxProps {
  label: string
  style?: any
  checked?: boolean
  disabled?: boolean
  onClick?: MouseEventHandler<HTMLInputElement>
  onChange?: ChangeEventHandler<HTMLInputElement>
  className?: string
}

function Checkbox({
  label = '',
  style,
  checked = false,
  disabled = false,
  onClick = () => {},
  onChange = () => {},
  className = '',
}: CheckboxProps) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div className={[styles.checkbox, className].join(' ')}>
      <div className={['preload', styles.preload].join(' ')} />
      <input
        id={htmlIdRef.current}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        className={[styles.checkbox__input, className].join(' ')}
        style={style}
        onClick={onClick}
        onChange={onChange}
      />
      <label
        htmlFor={htmlIdRef.current}
        className={[styles.checkbox__label, 'paragraph', className].join(' ')}
      >
        {label}
      </label>
    </div>
  )
}

export default Checkbox
