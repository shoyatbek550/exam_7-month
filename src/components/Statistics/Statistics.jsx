import React from "react";
import "./page.scss";
const stat = [
  {
    num: "10K+",
    text: `Satisfied Costumers
        All Great Over The World `,
  },
  {
    num: "4M",
    text: `Healthy Dishes SoldIncluding Milk Shakes Smooth`,
  },
  {
    num: "99.99%",
    text: `Reliable Customer SupportWe Provide Great Experiences`,
  },
];
function Statistics() {
  return (
    <section className="stat">
      <div className="container statWrapper">
        {stat.map((e) => {
          return (
            <div className="statbox">
              <div className="num">{e.num}</div>
              <div className="statText">{e.text}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Statistics;
