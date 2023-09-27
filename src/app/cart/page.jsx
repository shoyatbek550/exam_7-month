"use client"
import React, { useEffect, useState } from "react";
import ShopCard from "../../components/ShopCard/ShopCard";
import "./page.scss";

function Cart() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [delivery, setdelivery] = useState(0);

  useEffect(() => {
    const storedOrders = JSON.parse(window.localStorage.getItem("orders"));
    if (Array.isArray(storedOrders)) {
      setOrders(storedOrders);
    }
  }, []); 

  useEffect(() => {
    const calculateTotalPrice = () => {
      return orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
    };

    setTotal(calculateTotalPrice());
    orders.length && setdelivery(3.59)
  }, [orders]);


  const removeFromCart = (id) => {
    setOrders((prevOrders) => prevOrders.filter((order) => order.id !== id))
    window.localStorage.setItem("orders", JSON.stringify(orders));
  };

  const decrementQuantity = (id) => {
    const targetOrder = orders.find((order) => order.id === id);

    if (targetOrder) {
      if (targetOrder.quantity == 1) {
        removeFromCart(id);
        window.localStorage.setItem("orders", JSON.stringify(orders));
      } else {
        setOrders((prevOrders) =>
          prevOrders.map((order) =>
            order.id === id ? { ...order, quantity: order.quantity - 1 } : order
          )
        );
        window.localStorage.setItem("orders", JSON.stringify(orders));
      }
    }
  };

  const incrementQuantity = (id) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === id ? { ...order, quantity: order.quantity + 1 } : order
      )

    );
    window.localStorage.setItem("orders", JSON.stringify(orders));
  };

  return (
    <main>
      <section className="container">
        <div className="ShopCard">
          {orders?.map((el) => (
            <ShopCard
              data={el}
              key={el.id} 
              decrementQuantity={decrementQuantity}
              increment={incrementQuantity}
            />
          ))}
        </div>
        <div className="total">
          <ul>
            <li>
              <span>Subtotal</span>${(total).toFixed(2)} 
            </li>
            <li>
              <span>Delivery</span>${delivery}
            </li>
            <li>
              <span>Total</span>${(total + delivery).toFixed(2)} 
            </li>
            <button className="prBtn">Review Payment</button>
          </ul>
        </div>
      </section>
    </main>
  );
}

export default Cart;
