import React from "react";
import "./page.scss";
import Image from "next/image";
import image from "../../assets/introImage.png";

function Intro() {
  return (
    <main className="container intro">
      <div className="introInfo">
        <span className="Introsubtitle">OVER 1000 USERS</span>
        <h1>
          Enjoy Foods All Over The <span> World</span>
        </h1>
        <p>
          EatLy help you set saving goals, earn cash back offers, Go to
          disclaimer for more details and get paychecks up to two days early.
          Get a <span> $20 bonus</span>
        </p>
        <button className="prBtn">Get Started</button>
      </div>
      <div className="introImage">
        <Image alt="intro image" src={image} width={500} />
      </div>
    </main>
  );
}

export default Intro;
