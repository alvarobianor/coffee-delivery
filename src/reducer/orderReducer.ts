import { Order } from 'src/context/OrderContext';
import { ActionType } from './actions';

interface OrderState {
  orders: Order[];
}

interface Actions {
  type: ActionType;
  payload: {
    orders: Order[];
  };
}

export const orderReducer = (state: OrderState, action: Actions) => {
  switch (action.type) {
    case ActionType.ADD_ORDER:
      return { ...state, orders: [...state.orders, ...action.payload.orders] };
    case ActionType.REMOVE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(
          (order) => order.id !== action.payload.orders[0].id,
        ),
      };
    case 'CLEAR_ORDERS':
      return { orders: [] };
    default:
      return state;
  }
};
