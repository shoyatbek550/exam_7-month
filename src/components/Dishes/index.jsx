"use client";
import React, { useEffect, useState } from "react";
import CustomImage from "../CustomImage/image";
import "./dishesCart.scss";
import { Like, Rate } from "../icons";
function Dishcart({ data }) {
  const { id, name, type, time, mark, price } = data;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(window.localStorage.getItem("orders"));
    if (Array.isArray(storedOrders)) {
      setOrders(storedOrders);
    }else{
      setOrders([])
      window.localStorage.setItem("orders", JSON.stringify(orders));
    }
  }, []); 

  const toCart = async (data) => {
    const orders = JSON.parse(
      window.localStorage.getItem("orders")
        ? window.localStorage.getItem("orders")
        : []
    );
    const existOrder = orders.find((order) => order.id === data.id);
    if (existOrder) {
      const ind = orders.findIndex((pre) => pre.id === existOrder.id);

      orders.splice(ind, 1);

      window.localStorage.setItem("orders", JSON.stringify(orders));
    } else {
      const newData = {
        ...data,
        quantity: 1,
      };
      orders.push(newData);
      window.localStorage.setItem("orders", JSON.stringify(orders));
    }
  };
  return (
    <div className="dishcart">
      <button className="likeBtn">
        <Like />
      </button>
      <CustomImage product={data} />
      <span className={`mark ${type}`}>{type}</span>
      <h3 className="dishCartImage" >  {name}</h3>
      <div className="little">
        <span className="time">{time}min ·</span>
        <span className="rate">
          <Rate />
          {mark}
        </span>
      </div>
      <div className="bottom">
        <div className="price">${price}</div>
        <button  className="tocartButton" onClick={() => toCart(data)}>
          +
        </button>
      </div>
    </div>
  );
}

export default Dishcart;
