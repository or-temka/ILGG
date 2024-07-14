import IFloatingPanelsQueue, { RemovePanelAction } from '../interfaces'

const prepareToRemove = (
  state: IFloatingPanelsQueue[],
  action: RemovePanelAction
) => {
  state.map((panel) => {
    if (panel.id !== action.payload.id) return panel
    panel.delete = true
    return panel
  })
}

export default prepareToRemove
