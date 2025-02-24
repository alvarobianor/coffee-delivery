import { createContext, ReactNode, useReducer } from 'react';
import { Coffe } from 'src/data';
import { addItem, removeItem, resetOrders } from 'src/reducer/actions';
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

  const addOrIncrease = (id: number) => {
    dispatch(addItem(id));
  };

  const removeOrDecrease = (id: number) => {
    dispatch(removeItem(id));
  };

  const clearOrders = () => {
    dispatch(resetOrders());
  };

  return (
    <OrderContext.Provider
      value={{
        order,
        address,
        total,
        addOrIncrease,
        removeOrDecrease,
        clearOrders,
      }}
    >
      removeOrDecrease
      {children}
    </OrderContext.Provider>
  );
};
