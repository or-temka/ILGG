import { InputHTMLAttributes, useCallback, useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ReactComponent as ImageSVG } from 'assets/svgs/image.svg'

import styles from './InputFile.module.scss'
import { UseFormRegisterReturn } from 'react-hook-form'

export enum InputFileVariant {
  simple = styles.input__input_simple,
  light = styles.input__input_light,
}

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  setFile?: React.Dispatch<React.SetStateAction<File | null>>
  file?: File | null

  variant?: InputFileVariant
  errorText?: string

  classNames?: {
    input?: string
    placeholder?: string
    wrapper?: string
  }
  register?: UseFormRegisterReturn
  [key: string]: any
}

function InputFile({
  placeholder = 'Выберите файл...',
  file,
  label = '',
  setFile = () => {},
  variant = InputFileVariant.simple,
  errorText = '',
  onChange = () => {},
  classNames = {},
  register,
  ...restProps
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
        onChange={fileChangeHandle}
        className={[styles.input__input, classNames.input].join(' ')}
        {...restProps}
        {...register}
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
