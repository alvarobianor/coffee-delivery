export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ORDERS = 'CLEAR_ORDERS',
}

export function addItem(id: number) {
  return {
    type: ActionType.ADD_ITEM,
    payload: {
      addItem: {
        id: id,
      },
    },
  };
}

export function removeItem(id: number) {
  return {
    type: ActionType.REMOVE_ITEM,
    payload: {
      addItem: {
        id: id,
      },
    },
  };
}

export function resetOrders() {
  return {
    type: ActionType.CLEAR_ORDERS,
    payload: {},
  };
}
