import { Item } from 'src/context/OrderContext';
import { ActionType } from './actions';
import { produce } from 'immer';
import { infos } from 'src/data';

export interface Address {
  code: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

export interface Payment {
  paymentMethod: string;
  paymentMethodId: number;
}

export type OrderInformations = Address & Payment;

export interface OrderState {
  itens: Item[];
  address: Address;
  payment: Payment;
  total: number;
}

export interface Actions {
  type: ActionType;
  payload: {
    payment?: Payment;
    address?: Address;
    addItem?: {
      id: number;
    };
  };
}

// TODO create the option to add a payment method
export const orderReducer = (state: OrderState, action: Actions) => {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      return produce(state, (draftState) => {
        const order = draftState.itens.find(
          (item) => item.id === action.payload.addItem?.id,
        );
        if (order) {
          order.quantity += 1;
        } else {
          const coffee = infos.find(
            (coffee) => coffee.id === action.payload.addItem?.id,
          );
          if (!coffee) {
            throw new Error(
              `Coffee with id ${action.payload.addItem?.id} not found`,
            );
          }
          draftState.itens.push({ ...coffee, quantity: 1 });
        }
        draftState.total = draftState.itens.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );
      });
    // return { ...state, orders: [...state.orders, ...action.payload.orders] };
    case ActionType.REMOVE_ITEM:
      return produce(state, (draftState) => {
        const order = draftState.itens.find(
          (item) => item.id === action.payload.addItem?.id,
        );
        if (order) {
          order.quantity -= 1;
          if (order.quantity === 0) {
            draftState.itens = draftState.itens.filter(
              (item) => item.id !== action.payload.addItem?.id,
            );
          }
        }
        draftState.total = draftState.itens.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );
      });
    // return {
    //   ...state,
    //   order: state.order.filter(
    //     (item) => item.id !== action.payload.order[0].id,
    //   ),
    // };
    case ActionType.CLEAR_ITEM:
      return produce(state, (draftState) => {
        draftState.itens = draftState.itens.filter(
          (item) => item.id !== action.payload.addItem?.id,
        );
        draftState.total = draftState.itens.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        );
      });

    case ActionType.ADD_ADDRESS:
      return produce(state, (draftState) => {
        draftState.address = action.payload.address as Address;
      });
    case ActionType.ADD_PAYMENT:
      return produce(state, (draftState) => {
        draftState.payment = action.payload.payment as Payment;
      });
    case ActionType.CLEAR_ORDERS:
      return {
        itens: [],
        address: {} as Address,
        payment: {} as Payment,
        total: 0,
      };
    default:
      return state;
  }
};
