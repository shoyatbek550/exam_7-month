import React from "react";
import "./page.scss";
import Image from "next/image";
import image from "../../assets/mobile.png";
import { Arrow } from "../icons";
function Mobile() {
  return (
    <section className="container mobileWrapper">
      <div className="image">
        <Image src={image} alt="Mobile image" />
      </div>
      <div className="mobileInfo">
        <h2>
          Premium <span className="colored">Quality </span> For Your Health
        </h2>
        <ul>
          <li>
            Premium quality food is made with ingredients that are packed with
            essential vitamins, minerals.
          </li>
          <li>
            These foods promote overall wellness by support healthy digestion
            and boosting immunity
          </li>
        </ul>
        <button className="prBtn">
          Download <Arrow />{" "}
        </button>
      </div>
    </section>
  );
}

export default Mobile;
