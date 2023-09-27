import React from "react";
import "./page.scss";
import Image from "next/image";
import image from "../../assets/imag1.png";
function Discount() {
  return (
    <section>
      <div className="container discount">
        <div className=" discountBox">
          <h1>GET 50%</h1>
          <label>
            
            <input type="text" placeholder="Enter Your Email Address" />
            <button>Submit</button>
          </label>
          <div className="discountImage">

          <Image src={image} alt="discount" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Discount;
