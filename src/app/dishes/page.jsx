"use client";
import React, { useEffect, useState } from "react";
import DishCart from "../../components/Dishes/index";
import { axiosBase } from "../../server";
import Loader from "../../components/Loader/Loader";
import Accordion from "../../components/Accordion/Accordion";
const accordions = [
  {
    title: "How long does delivery take?",
    text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?",
  },
  {
    title: "How Does It Work ?",
    text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?",
  },
  {
    title: "How does your food delivery service work?",
    text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?",
  },
  {
    title: "What payment options do you accept?",
    text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?",
  },
  {
    title: "Do you offer discounts or promotions?",
    text: "You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?",
  },
];
export default function Dishes() {
  const [data, setdata] = useState([]);
  const [form, setForm] = useState({ page: 1 });
  const [loader, setloader] = useState(false);

  const incrementPage = () => {
    setForm({ ...form, page: form.page + 1 });
  };

  const decrementPage = () => {
    if (form.page > 1) {
      setForm({ ...form, page: form.page - 1 });
    }
  };

  useEffect(() => {
    setloader(true);
    axiosBase
      .get(`dishes?page=${form.page}&${form.query ? `name=${form.query}` : ""}`)
      .then((e) => {
        setdata(e.data.data.data), setloader(false);
      })
      .catch((err) => {
        alert(err.message), setloader(false);
      });
  }, [form]);
  const handlechange = (e) => {
    setForm((pre) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container ">
      <label className="search">
        <input
          type="text"
          onChange={handlechange}
          name="query"
          placeholder="Search your delicious dishes..."
        />
      </label>
      <div className="dishesWrapper">
        {loader ? (
          <Loader />
        ) : (
          data.map((e, i) => {
            return <DishCart data={e} key={i} />;
          })
        )}
      </div>
      <div className="pagination">
        <button onClick={decrementPage}>Previous</button>
        <button onClick={incrementPage}>Next</button>
      </div>
      <div >
        <h1 className="accordionsTitle" >Frequently Asked Questions</h1>
        <div className="accordions">
          {accordions.map((e, i) => (
            <Accordion data={e} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
