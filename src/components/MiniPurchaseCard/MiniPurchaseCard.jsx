import React from "react";
import "./page.scss";
import Image from "next/image";
function MiniPurchaseCard({ data }) {
  return (
    <div className="MiniPurchaseCard">
      <Image src={data.image} alt="minipurc" />
      <div className="info">
        <h4>{data.title}</h4>
        <p>{data.status}</p>
      </div>
      <div className="time">{data.time}</div>
    </div>
  );
}

export default MiniPurchaseCard;
