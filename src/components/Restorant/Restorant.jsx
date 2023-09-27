import Image from "next/image";
import React from "react";
import image from "../../assets/restorant.png";
import axios from "axios";
import Link from "next/link";
import { Arrow, Bookmark, Rate } from "../icons";
import Dishcart from "../Dishes";
import './page.scss'
async function Restorant() {
  return axios
    .get("http://207.154.221.44:4002/api/dishes?page_size=5")
    .then((e) => {
      return (
        <section>
      <div className="container">
        <div className="restorantBox">
          <Image src={image} alt="restoran infi" />
          <div className="infoRestoran">
            <h3>The Chicken King</h3>
            <div className="little">
              <span className="time">24 min·</span>
              <span className="rate">
                <Rate /> 4.8
              </span>
            </div>
            <button>
              <Bookmark />
            </button>
          </div>
        </div>
        <div className="topDishes">
          <h3 className="topDishesTitle">
            Our Top <span className="colored">Dishes</span>
          </h3>
          <div className="topDishesCart">
            {
              e.data.data.data.map((el , i) =>(
                <Dishcart data={el} key={i} />
              ))
            }
          </div>
          <Link href={"/dishes"}>
            View All <Arrow />
          </Link>
        </div>
      </div>
    </section>
      );
    });
}

export default Restorant;
