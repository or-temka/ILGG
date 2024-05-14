import styles from './SkeletonText.module.scss'

export enum Variant {
  simple = 'simple',
  light = 'light',
}

interface SkeletonTextProps {
  variant?: Variant
  className?: string
}

function SkeletonText({
  variant = Variant.simple, // types: simple, light
  className = '',
}: SkeletonTextProps) {
  return (
    <div
      className={[
        styles.skeleton,
        variant === 'simple' ? 'pulse' : 'pulse-light',
        className,
      ].join(' ')}
    ></div>
  )
}

export default SkeletonText
