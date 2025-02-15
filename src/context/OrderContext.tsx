import { createContext, ReactNode, useState } from 'react';

interface Order {
  id: string;
  product: string;
  quantity: number;
  price: number;
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
