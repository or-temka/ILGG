import getRandomInt from 'utils/getRandomInt'
import styles from './SkeletonText.module.scss'
import { SkeletonTextVariant } from './enums'
import { SkeletonTextProps } from './interfaces'

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
export { SkeletonTextVariant }
