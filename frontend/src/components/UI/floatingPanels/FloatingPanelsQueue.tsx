import { useEffect, useMemo } from 'react'

import FloatingPanelSkeleton from './skeletons/FloatingPanelSkeleton'

import styles from './FloatingPanelsQueue.module.scss'

interface FloatingPanelsQueueProps {
  queue?: []
  setQueue?: any
  itemLifeTime?: number
  deleteItemId?: string | number
  className?: string
  panelsClassName?: string
}

function FloatingPanelsQueue({
  queue = [],
  setQueue = () => {},
  itemLifeTime = 5000,
  deleteItemId = '',
  className = '',
  panelsClassName,
}: FloatingPanelsQueueProps) {
  // deleting item
  // delete from original
  const deleteItemFromQueueHandler = (itemId: number | string) => {
    setQueue((prev: any) => [...prev].filter((item) => item.id !== itemId))
  }
  // smooth delete from original
  const smoothDeleteItemFromQueueHandler = (itemId: number | string) => {
    setQueue((prev: any) =>
      [...prev].map((item) => {
        if (item.id !== itemId) return item
        item.delete = true
        return item
      })
    )
    setTimeout(() => {
      setQueue((prev: any) => [...prev].filter((item) => item.id !== itemId))
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
    queue.map((item: any) => {
      setTimeout(() => {
        smoothDeleteItemFromQueueHandler(item.id)
      }, item.lifeTime || itemLifeTime)
    })
  }, [queue])

  return (
    <FloatingPanelSkeleton className={[styles.queue, className].join(' ')}>
      {queue.map((item: any) => {
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
