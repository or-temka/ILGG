import styles from './AppOneNews.module.scss'

interface AppOneNewsProps {
  classNames?: {
    wrapper?: string
  }
}

function AppOneNews({ classNames }: AppOneNewsProps) {
  return (
    <article
      className={[styles.oneNews, classNames?.wrapper].join(' ')}
    ></article>
  )
}

export default AppOneNews
