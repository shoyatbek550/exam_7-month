"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./page.scss";
function ShopCard({ data, decrementQuantity, increment }) {
  return (
    <div className="shopCard">
      <Image
        src={`http://207.154.221.44:4002/${data?.image}`}
        alt={data.name}
        width={100}
        height={100}
      />
      <div className="cartInfo">
        <h5>{data.name}</h5>
        <p>${data.price}</p>
      </div>
      <div className="cartInfo2">
        <div className="btns">
          <button
            className="decrement"
            onClick={() => decrementQuantity(data.id)}
          >
            -
          </button>
          <span className="price">{(data.quantity)}</span>
          <button className="increment" onClick={() => increment(data.id)}>
            +
          </button>
        </div>
        <span className="total">${(data.price * data.quantity).toFixed(2)}</span>
      </div>
    </div>
  );
}

export default ShopCard;
