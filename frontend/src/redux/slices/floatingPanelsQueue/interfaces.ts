import { floatingNotificationVariant } from 'components'
import { PanelVariant } from './slice'

export default interface IFloatingPanelsQueue {
  id: string | number
  item: {
    type: PanelVariant
    variant?: floatingNotificationVariant
    text?: string
  }
  lifeTime?: number
  delete?: boolean
}

//#region reducers interfaces
export interface AddPanelAction {
  type: string
  payload: Omit<IFloatingPanelsQueue, 'id'>
}
export interface RemovePanelAction {
  type: string
  payload: {
    id: string | number
  }
}
//#endregion
