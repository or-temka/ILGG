import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import {
  PanelVariant,
  addPanel,
} from '../../../redux/slices/floatingPanelsQueue/slice'
import { floatingNotificationVariant } from 'components'

interface useDispatchPanelProps {
  variant?: floatingNotificationVariant
}

function useNotificationPanel({
  variant = floatingNotificationVariant.msg,
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
              (variant === floatingNotificationVariant.error
                ? 'Произошла ошибка!'
                : variant === floatingNotificationVariant.success
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
