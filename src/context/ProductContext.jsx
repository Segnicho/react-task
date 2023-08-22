import React, { createContext, useState, useEffect } from "react";
import { clientInstance } from "../utils/axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const response = await clientInstance.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Fetching products error:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};
