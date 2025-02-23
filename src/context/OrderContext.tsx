import { createContext, ReactNode, useReducer, useState } from 'react';
import { Coffe } from 'src/data';
import { orderReducer, OrderState } from 'src/reducer/orderReducer';

export interface Order extends Coffe {
  quantity: number;
}

export interface OrderC {
  productId: number;
}

interface OrderContextType {
  orders: Order[];
  addOrder: (order: Order) => void;
  removeOrder: (id: string) => void;
  clearOrders: () => void;
}

export const OrderContext = createContext<OrderContextType | undefined>(
  undefined,
);

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = useState<Order[]>([]);

  const [ordersReducer, dispatch] = useReducer(orderReducer, {
    order: [],
    address: {},
    total: 0,
  } as OrderState);

  const addOrder = (order: Order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };

  const removeOrder = (id: string) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id));
  };

  const clearOrders = () => {
    setOrders([]);
  };

  return (
    <OrderContext.Provider
      value={{ orders, addOrder, removeOrder, clearOrders }}
    >
      {children}
    </OrderContext.Provider>
  );
};
