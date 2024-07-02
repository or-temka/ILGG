import { useState } from 'react'

import InputFile from 'components/UI/inputs/InputFile/InputFile'

import styles from './Form.module.scss'

function Form() {
  const [file, setFile] = useState<File | null>(null)

  return (
    <>
      <form className={styles.form}>
        <InputFile
          label="Изображение аватара:"
          placeholder="Выберите изображение..."
          file={file}
          setFile={setFile}
          accept=".jpeg, .jpg, .png"
        />
      </form>
    </>
  )
}

export default Form
