import { createContext, ReactNode, useReducer } from 'react';
import { Coffe } from 'src/data';
import {
  addItem,
  decreaseItem,
  clearItem,
  resetOrders,
  addAddress,
} from 'src/reducer/actions';
import { Address, orderReducer } from 'src/reducer/orderReducer';

export interface Item extends Coffe {
  quantity: number;
}

interface OrderContextType {
  itens: Item[];
  address: unknown;
  total: number;
  addOrIncrease: (id: number) => void;
  removeOrDecrease: (id: number) => void;
  removeItem: (id: number) => void;
  clearOrders: () => void;
  createAddress: (address: Address) => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(orderReducer, {
    itens: [],
    address: {} as Address,
    total: 0,
  });

  const { itens, address, total } = state;

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

  function createAddress(address: Address) {
    dispatch(addAddress(address));
  }

  return (
    <OrderContext.Provider
      value={{
        itens,
        address,
        total,
        addOrIncrease,
        removeOrDecrease,
        removeItem,
        clearOrders,
        createAddress,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};
