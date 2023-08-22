import { OrderContext } from "../context/OrderContext";
import { useContext } from "react";

export const useOrder = () => {
  return useContext(OrderContext);
};
