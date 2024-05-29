import styles from './Main.module.scss'

interface MainProps {
  classNames?: {
    wrapper?: string
  }
}

function Main({ classNames }: MainProps) {
  return <main className={[styles.main, classNames?.wrapper].join(' ')}></main>
}

export default Main
