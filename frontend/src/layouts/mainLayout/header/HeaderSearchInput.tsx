import { HeaderSearchInputProps } from './interfaces'
import styles from './HeaderSearchInput.module.scss'

function HeaderSearchInput({
  value = '',
  onChange = () => {},
  onClick = () => {},
  className = '',
}: HeaderSearchInputProps) {
  return (
    <input
      type="text"
      value={value}
      onClick={onClick}
      onChange={onChange}
      placeholder="Поиск"
      className={[styles.input, className].join(' ')}
    />
  )
}

export default HeaderSearchInput
