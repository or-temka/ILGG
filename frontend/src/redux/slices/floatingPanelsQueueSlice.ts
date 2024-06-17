import { v4 as uuidv4 } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'

import { FloatingNotificationVariant } from 'components/UI/floatingPanels/FloatingNotification/FloatingNotification'

//#region reducers interfaces
interface AddPanelAction {
  type: string
  payload: Omit<IFloatingPanelsQueue, 'id'>
}
interface RemovePanelAction {
  type: string
  payload: {
    id: string | number
  }
}
//#endregion

export enum PanelVariant {
  textNotification = 'textNotification',
}

export interface IFloatingPanelsQueue {
  id: string | number
  item: {
    type: PanelVariant
    variant?: FloatingNotificationVariant
    text?: string
  }
  lifeTime?: number
  delete?: boolean
}

const initialState: IFloatingPanelsQueue[] = []

const floatingPanelsQueueSlice = createSlice({
  name: 'floatingPanelsQueue',
  initialState,
  reducers: {
    addPanel: (state: IFloatingPanelsQueue[], action: AddPanelAction) => {
      state.push({
        id: uuidv4(),
        item: action.payload.item,
        lifeTime: action.payload.lifeTime,
      })
    },
    removePanel: (state: IFloatingPanelsQueue[], action: RemovePanelAction) => {
      return [...state].filter((panel) => panel.id !== action.payload.id)
    },
    prepareToRemove: (
      state: IFloatingPanelsQueue[],
      action: RemovePanelAction
    ) => {
      state.map((panel) => {
        if (panel.id !== action.payload.id) return panel
        panel.delete = true
        return panel
      })
    },
  },
})

export const { addPanel, removePanel, prepareToRemove } =
  floatingPanelsQueueSlice.actions

export const selectPanels = (state: any) => state.floatingPanelsQueue

export default floatingPanelsQueueSlice.reducer
