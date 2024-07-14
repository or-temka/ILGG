import { v4 as uuidv4 } from 'uuid'

import IFloatingPanelsQueue, {
  AddPanelAction,
  RemovePanelAction,
} from './interfaces'

const reducers = {
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
}

export default reducers
