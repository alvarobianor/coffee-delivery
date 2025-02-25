import { createContext, ReactNode, useReducer } from 'react';
import { Coffe } from 'src/data';
import {
  addItem,
  decreaseItem,
  clearItem,
  resetOrders,
} from 'src/reducer/actions';
import { orderReducer, OrderState } from 'src/reducer/orderReducer';

export interface Order extends Coffe {
  quantity: number;
}

interface OrderContextType {
  order: Order[];
  address: unknown;
  total: number;
  addOrIncrease: (id: number) => void;
  removeOrDecrease: (id: number) => void;
  removeItem: (id: number) => void;
  clearOrders: () => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [{ order, address, total }, dispatch] = useReducer(orderReducer, {
    order: [],
    address: {},
    total: 0,
  } as OrderState);

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

  return (
    <OrderContext.Provider
      value={{
        order,
        address,
        total,
        addOrIncrease,
        removeOrDecrease,
        removeItem,
        clearOrders,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
