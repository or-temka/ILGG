import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  PanelVariant,
  addPanel,
} from '../../redux/slices/floatingPanelsQueueSlice'
import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification'

interface useDispatchPanelProps {
  variant?: FloatingNotificationVariant
}

function useNotificationPanel({
  variant = FloatingNotificationVariant.msg,
}: useDispatchPanelProps) {
  const dispatch = useDispatch()

  const addNotificationPanel = useCallback(
    (message: string): any => {
      dispatch(
        addPanel({
          item: {
            type: PanelVariant.textNotification,
            variant: variant,
            text:
              message ||
              (variant === FloatingNotificationVariant.error
                ? 'Произошла ошибка!'
                : variant === FloatingNotificationVariant.success
                ? 'Успешно!'
                : 'Ок.'),
          },
        })
      )
    },
    [dispatch]
  )

  return addNotificationPanel
}

export default useNotificationPanel
