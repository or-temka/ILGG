import styles from './SkeletonText.module.scss'

function SkeletonText({
  type = 'simple', // types: simple, light
  className,
  ...params
}) {
  return (
    <div
      {...params}
      className={[
        styles.skeleton,
        type === 'simple' ? 'pulse' : 'pulse-light',
        className,
      ].join(' ')}
    ></div>
  )
}

export default SkeletonText
