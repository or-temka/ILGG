import { v4 as uuidv4 } from 'uuid'

import styles from './Checkbox.module.scss'
import { useRef } from 'react'

function Checkbox({
  label = '',
  style,
  className = '',
  checked = false,
  disabled = false,
  onClick = () => {},
  onChange = () => {},
  ...params
}) {
  const htmlIdRef = useRef(uuidv4())

  return (
    <div {...params} className={[styles.checkbox, className].join(' ')}>
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
