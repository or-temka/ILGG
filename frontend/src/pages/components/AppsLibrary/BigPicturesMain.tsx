import styles from './BigPicturesMain.module.scss'

interface BigPicturesMainProps {
  classNames?: {
    wrapper?: string
  }
}

function BigPicturesMain({ classNames }: BigPicturesMainProps) {
  return <div className={[styles.main, classNames?.wrapper].join(' ')}></div>
}

export default BigPicturesMain
