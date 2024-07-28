import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  PanelVariant,
  prepareToRemove,
  removePanel,
  selectPanels,
} from '../../../../redux/slices/floatingPanelsQueue/slice'
import FloatingPanelSkeleton from '../skeletons/FloatingPanelSkeleton/FloatingPanelSkeleton'
import FloatingNotification from '../FloatingNotification/FloatingNotification'
import styles from './FloatingPanelsQueue.module.scss'
import IFloatingPanelsQueue from '../../../../redux/slices/floatingPanelsQueue/interfaces'
import { FloatingPanelsQueueProps } from './interfaces'

function FloatingPanelsQueue({
  itemLifeTime = 5000,
  className = '',
}: FloatingPanelsQueueProps) {
  const panelsQueue: IFloatingPanelsQueue[] = useSelector(selectPanels)

  const dispatch = useDispatch()

  // Auto destroy items
  const smoothDeleteItemFromQueueHandler = useCallback(
    (panelId: number | string) => {
      dispatch(prepareToRemove({ id: panelId }))
      setTimeout(() => {
        dispatch(removePanel({ id: panelId }))
      }, 400)
    },
    [dispatch]
  )
  useMemo(() => {
    panelsQueue.map((item) => {
      setTimeout(() => {
        smoothDeleteItemFromQueueHandler(item.id)
      }, item.lifeTime || itemLifeTime)
    })
  }, [panelsQueue, itemLifeTime, smoothDeleteItemFromQueueHandler])

  return (
    <FloatingPanelSkeleton className={[styles.queue, className].join(' ')}>
      {panelsQueue.map((panel) => {
        return (
          <div
            key={panel.id}
            className={[
              styles.queue__item,
              panel.delete ? styles.queue__item_delete : '',
            ].join(' ')}
          >
            {panel.item.type === PanelVariant.textNotification && (
              <FloatingNotification
                text={panel.item.text}
                variant={panel.item.variant}
                onClose={() => dispatch(removePanel({ id: panel.id }))}
              />
            )}
          </div>
        )
      })}
    </FloatingPanelSkeleton>
  )
}

export default FloatingPanelsQueue
