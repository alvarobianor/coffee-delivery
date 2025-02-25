import { Address } from './orderReducer';

export enum ActionType {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  CLEAR_ORDERS = 'CLEAR_ORDERS',
  CLEAR_ITEM = 'CLEAR_ITEM',
  ADD_ADDRESS = 'ADD_ADDRESS',
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

export function decreaseItem(id: number) {
  return {
    type: ActionType.REMOVE_ITEM,
    payload: {
      addItem: {
        id: id,
      },
    },
  };
}

export function clearItem(id: number) {
  return {
    type: ActionType.CLEAR_ITEM,
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

export function addAddress(address: Address) {
  return {
    type: ActionType.ADD_ADDRESS,
    payload: {
      address: address,
    },
  };
}
