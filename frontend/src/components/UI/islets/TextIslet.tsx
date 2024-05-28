import { ReactNode } from 'react'

import styles from './TextIslet.module.scss'

interface TextIsletProps {
  children?: ReactNode
  onClick?: Function
  classNames?: {
    text?: string
  }
}

function TextIslet({ children, onClick, classNames }: TextIsletProps) {
  const onClickHandler = () => {
    if (!onClick) return
    onClick()
  }

  return (
    <div
      className={[
        styles.text,
        onClick ? styles.text_clickable : '',
        classNames?.text,
      ].join(' ')}
      onClick={onClickHandler}
    >
      {children}
    </div>
  )
}

export default TextIslet
