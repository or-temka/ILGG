import { useState } from 'react'

import FloatingPanelSkeleton from './skeletons/FloatingPanelSkeleton'

import styles from './FloatingNotification.module.scss'

function FloatingNotification({
  className = '',
  text = '',
  onClose = () => {},
  headerText = 'Уведомление',
  wrapperClassName = '',
  ...params
}) {
  return (
    <FloatingPanelSkeleton
      className={wrapperClassName}
      posHorizontal="right"
      posVertical="bottom"
    >
      <div {...params} className={[styles.notification, className].join(' ')}>
        <header className={styles.notification__header}>
          <span className={styles.notification__headerText}>{headerText}</span>
          <div
            className={styles.notification__closeBtn}
            onClick={onClose}
          ></div>
        </header>
        <main className={styles.notification__main}>
          <span className={styles.notification__textContent}>{text}</span>
        </main>
      </div>
    </FloatingPanelSkeleton>
  )
}

export default FloatingNotification
