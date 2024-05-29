import style from './AppNews.module.scss'

interface AppNewsProps {
  classNames?: {
    wrapper?: string
  }
}

function AppNews({ classNames }: AppNewsProps) {
  return (
    <section className={[style.news, classNames?.wrapper].join(' ')}></section>
  )
}

export default AppNews
