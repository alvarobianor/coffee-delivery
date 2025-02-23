import { Order } from 'src/context/OrderContext';
import { ActionType } from './actions';
import { produce } from 'immer';
import { infos } from 'src/data';

export interface OrderState {
  order: Order[];
  address: unknown;
  total: number;
}

interface Actions {
  type: ActionType;
  payload: {
    order: Order[];
    addItem: {
      id: number;
    };
  };
}

export const orderReducer = (state: OrderState, action: Actions) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return produce(state, (draftState) => {
        const order = draftState.order.find(
          (item) => item.id === action.payload.addItem.id,
        );
        if (order) {
          order.quantity += 1;
        } else {
          const coffee = infos.find(
            (coffee) => coffee.id === action.payload.addItem.id,
          );
          if (!coffee) {
            throw new Error(
              `Coffee with id ${action.payload.addItem.id} not found`,
            );
          }
          draftState.order.push({ ...coffee, quantity: 1 });
        }
        draftState.total = draftState.order.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );
      });
    // return { ...state, orders: [...state.orders, ...action.payload.orders] };
    case ActionType.REMOVE_ITEM:
      return {
        ...state,
        order: state.order.filter(
          (item) => item.id !== action.payload.order[0].id,
        ),
      };
    case 'CLEAR_ORDERS':
      return { order: [], address: {}, total: 0 };
    default:
      return state;
  }
};
