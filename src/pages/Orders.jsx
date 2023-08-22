import React from "react";
import { useOrder } from "../hooks/useOrder";

const Orders = () => {
  const { orders } = useOrder();

  return (
    <div>
      <h2>Orders</h2>
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product ID</th>
            <th>User Email</th>
            <th>Status</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.productId}</td>
              <td>{order.userEmail}</td>
              <td>{order.status}</td>
              <td>${order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
