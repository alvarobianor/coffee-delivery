import { createContext, ReactNode, useReducer } from 'react';
import { Coffe } from 'src/data';
import {
  addItem,
  decreaseItem,
  clearItem,
  resetOrders,
  addAddress,
  addPayment,
} from 'src/reducer/actions';
import { Address, orderReducer, Payment } from 'src/reducer/orderReducer';

export interface Item extends Coffe {
  quantity: number;
}

interface OrderContextType {
  itens: Item[];
  address: unknown;
  payment: unknown;
  total: number;
  addOrIncrease: (id: number) => void;
  removeOrDecrease: (id: number) => void;
  removeItem: (id: number) => void;
  clearOrders: () => void;
  updateAddress: (address: Address) => void;
  updatePayment: (payment: Payment) => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(orderReducer, {
    itens: [],
    address: {} as Address,
    payment: {} as Payment,
    total: 0,
  });

  const { itens, address, payment, total } = state;

  function addOrIncrease(id: number) {
    dispatch(addItem(id));
  }

  function removeOrDecrease(id: number) {
    dispatch(decreaseItem(id));
  }

  function removeItem(id: number) {
    dispatch(clearItem(id));
  }

  function clearOrders() {
    dispatch(resetOrders());
  }

  function updateAddress(address: Address) {
    dispatch(addAddress(address));
  }

  function updatePayment(payment: Payment) {
    dispatch(addPayment(payment));
  }

  return (
    <OrderContext.Provider
      value={{
        itens,
        address,
        payment,
        total,
        addOrIncrease,
        removeOrDecrease,
        removeItem,
        clearOrders,
        updateAddress,
        updatePayment,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
