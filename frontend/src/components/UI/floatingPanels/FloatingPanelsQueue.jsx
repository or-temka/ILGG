import { useEffect, useMemo, useState } from 'react'

import FloatingPanelSkeleton from './skeletons/FloatingPanelSkeleton'

import styles from './FloatingPanelsQueue.module.scss'

function FloatingPanelsQueue({
  queue = [],
  setQueue,
  itemLifeTime = 5000,
  deleteItemId = '',
  className = '',
  panelsClassName,
  ...params
}) {
  // deleting item
  // delete from original
  const deleteItemFromQueueHandler = (itemId) => {
    setQueue((prev) => [...prev].filter((item) => item.id !== itemId))
  }
  // smooth delete from original
  const smoothDeleteItemFromQueueHandler = (itemId) => {
    setQueue((prev) =>
      [...prev].map((item) => {
        if (item.id !== itemId) return item
        item.delete = true
        return item
      })
    )
    setTimeout(() => {
      setQueue((prev) => [...prev].filter((item) => item.id !== itemId))
    }, 400)
  }
  // delete handler
  useEffect(() => {
    if (deleteItemId) {
      deleteItemFromQueueHandler(deleteItemId)
    }
  }, [deleteItemId])

  // Auto destroy items
  useMemo(() => {
    queue.map((item) => {
      setTimeout(() => {
        smoothDeleteItemFromQueueHandler(item.id)
      }, item.lifeTime || itemLifeTime)
    })
  }, [queue])

  return (
    <FloatingPanelSkeleton
      {...params}
      className={[styles.queue, className].join(' ')}
    >
      {queue.map((item) => {
        return (
          <div
            key={item.id}
            className={[
              styles.queue__item,
              item.delete ? styles.queue__item_delete : '',
            ].join(' ')}
          >
            {item.item}
          </div>
        )
      })}
    </FloatingPanelSkeleton>
  )
}

export default FloatingPanelsQueue
