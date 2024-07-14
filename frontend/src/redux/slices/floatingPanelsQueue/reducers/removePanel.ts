import IFloatingPanelsQueue, { RemovePanelAction } from '../interfaces'

const removePanel = (
  state: IFloatingPanelsQueue[],
  action: RemovePanelAction
) => {
  return [...state].filter((panel) => panel.id !== action.payload.id)
}

export default removePanel
