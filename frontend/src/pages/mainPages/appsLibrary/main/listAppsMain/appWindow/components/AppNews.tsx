import style from './AppNews.module.scss'
import AppOneNews from './AppOneNews'
import { AppNewsProps } from './interfaces'

function AppNews({ classNames }: AppNewsProps) {
  return (
    <section className={[style.news, classNames?.wrapper].join(' ')}>
      <header className={style.news__header}>
        <span className={style.news__label}>Новости и обновления</span>
      </header>
      <main className={style.news__main}>
        <div className={style.news__news}>
          <AppOneNews />
          <AppOneNews />
        </div>
      </main>
    </section>
  )
}

export default AppNews
