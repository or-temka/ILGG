import getRandomInt from 'utils/getRandomInt'

import styles from './SkeletonText.module.scss'

export enum SkeletonTextVariant {
  simple = 'pulse',
  light = 'pulse-light',
}

interface SkeletonTextProps {
  variant?: SkeletonTextVariant
  className?: string
}

function SkeletonText({
  variant = SkeletonTextVariant.simple, // types: simple, light
  className = '',
}: SkeletonTextProps) {
  const randomWidth = getRandomInt(40, 100)

  return (
    <div
      className={[styles.skeleton, variant, className].join(' ')}
      style={{ width: `${randomWidth}%` }}
    ></div>
  )
}

export default SkeletonText
