import {
  ChangeEventHandler,
  MouseEventHandler,
  useCallback,
  useRef,
  useState,
} from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ReactComponent as ImageSVG } from 'assets/svgs/image.svg'

import styles from './InputFile.module.scss'

export enum InputFileVariant {
  simple = styles.input__input_simple,
  light = styles.input__input_light,
}

interface InputFileProps {
  setFile: React.Dispatch<React.SetStateAction<File | null>>
  file: File | null

  accept?: string | undefined
  placeholder?: string
  label?: string
  variant?: InputFileVariant
  errorText?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  onClick?: MouseEventHandler<HTMLInputElement>

  classNames?: {
    input?: string
    placeholder?: string
    wrapper?: string
  }
}

function InputFile({
  placeholder = 'Выберите файл...',
  file,
  label = '',
  accept,
  setFile,
  variant = InputFileVariant.simple, // types: simple, light
  errorText = '',
  onChange = () => {},
  onClick = () => {},
  classNames = {},
}: InputFileProps) {
  const [fileContent, setFileContent] = useState<any>(null)
  const htmlIdRef = useRef(uuidv4())

  const fileChangeHandle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e)

      if (!e.target.files) return
      const selectedFile = e.target.files[0]

      setFile(selectedFile)

      const reader = new FileReader()

      reader.onload = () => {
        setFileContent(reader.result)
        console.log(reader.result)
      }
      reader.readAsDataURL(selectedFile)
    },
    [onChange, setFile, setFileContent]
  )

  return (
    <div className={[styles.input, classNames.wrapper].join(' ')}>
      <label htmlFor={htmlIdRef.current} className={styles.input__label}>
        <span className={styles.input__labelText}>{label}</span>
        <span
          className={[
            styles.input__placeholder,
            errorText && styles.input__input_error,
            variant,
            file && styles.input__placeholder_active,
            classNames.placeholder,
          ].join(' ')}
        >
          <ImageSVG />
          {file ? file.name : placeholder}
        </span>
      </label>

      <input
        id={htmlIdRef.current}
        type="file"
        accept={accept}
        onChange={fileChangeHandle}
        onClick={onClick}
        className={[styles.input__input, classNames.input].join(' ')}
      />
      {errorText && (
        <span className={['small-text', styles.input__errorText].join(' ')}>
          {errorText}
        </span>
      )}
    </div>
  )
}

export default InputFile
