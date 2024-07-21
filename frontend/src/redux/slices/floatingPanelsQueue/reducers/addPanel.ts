import { v4 as uuidv4 } from 'uuid'

import IFloatingPanelsQueue, { AddPanelAction } from '../interfaces'

const addPanel = (state: IFloatingPanelsQueue[], action: AddPanelAction) => {
  state.push({
    id: uuidv4(),
    item: action.payload.item,
    lifeTime: action.payload.lifeTime,
  })
}

export default addPanel
