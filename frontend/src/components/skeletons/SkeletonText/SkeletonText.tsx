import getRandomInt from 'utils/getRandomInt'
import { skeletonTextVariant } from './enums'
import { SkeletonTextProps } from './interfaces'
import styles from './SkeletonText.module.scss'

function SkeletonText({
  variant = skeletonTextVariant.simple, // types: simple, light
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

export { SkeletonText, skeletonTextVariant }
