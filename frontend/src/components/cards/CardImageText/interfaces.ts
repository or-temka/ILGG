import { MouseEventHandler, ReactNode } from 'react'

export interface CardImageTextProps {
  children?: ReactNode
  text?: string
  imgSrc?: string
  alt?: string
  onClick?: MouseEventHandler<HTMLDivElement>
  className?: string
  imageClassName?: string
  textClassName?: string
}
