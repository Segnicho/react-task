import React, { createContext, useContext, useState, useEffect } from "react";
import { clientInstance } from "../utils/axios";
import { toast } from "react-toastify";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await clientInstance.get("/orders");
      setOrders(response.data);
    } catch (error) {
      console.error("Fetching orders error:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const placeOrder = async (productId, user, price) => {
    if (!user) {
      return;
    }

    try {
      const orderData = {
        userId: user.email,
        productId,
        price,
        status: 'pending'
      };

      const response = await clientInstance.post("/orders", orderData);
      toast.success("Order placed successfully");
      fetchOrders(); 
    } catch (error) {
      toast.error("Oops! Something went wrong!");
    }
  };

  return (
    <OrderContext.Provider value={{ orders, placeOrder }}>
      {children}
    </OrderContext.Provider>
  );
};
