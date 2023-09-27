import React from "react";
import "./page.scss";
import MiniPurchaseCard from "../MiniPurchaseCard/MiniPurchaseCard";
import image1 from "../../assets/imag1.png";
import purcard from "../../assets/purcard.png";
import Image from "next/image";
const data = [
  {
    image: image1,
    title: "Chicken Hell",
    status: "On The Way",
    time: "3:09 PM",
  },
  {
    image: image1,
    title: "Chicken Hell",
    status: "On The Way",
    time: "3:09 PM",
  },
  {
    image: image1,
    title: "Chicken Hell",
    status: "On The Way",
    time: "3:09 PM",
  },
];
function Purchase() {
  return (
    <section className="container">
      <div className="flex">
        <div className="purchaseBox">
          <h2 className="purchaseBoxtitle" >
            Control Purchases Via <span className="colored">Dashboard</span>
          </h2>
          <div className="miniCards">
            {data.map((e, i) => (
              <MiniPurchaseCard data={e} />
            ))}
          </div>
        </div>
        <div className="miniDashboard">
          <Image src={purcard} alt="miniDashboard" />
        </div>
      </div>
    </section>
  );
}

export default Purchase;
