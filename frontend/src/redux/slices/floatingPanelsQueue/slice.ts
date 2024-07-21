import { createSlice } from '@reduxjs/toolkit'

import IFloatingPanelsQueue from './interfaces'
import reducers from './reducers'

export enum PanelVariant {
  textNotification = 'textNotification',
}

const initialState: IFloatingPanelsQueue[] = []

const floatingPanelsQueueSlice = createSlice({
  name: 'floatingPanelsQueue',
  initialState,
  reducers,
})

export const { addPanel, removePanel, prepareToRemove } =
  floatingPanelsQueueSlice.actions

export const selectPanels = (state: any) => state.floatingPanelsQueue

export default floatingPanelsQueueSlice.reducer
