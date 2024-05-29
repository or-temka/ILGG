import styles from './AppWindow.module.scss'

interface AppWindowProps {
  classNames?: {
    wrapper?: string
  }
}

function AppWindow({ classNames }: AppWindowProps) {
  return (
    <section
      className={[styles.window, classNames?.wrapper].join(' ')}
    ></section>
  )
}

export default AppWindow
