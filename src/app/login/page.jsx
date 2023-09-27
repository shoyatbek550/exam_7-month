"use client";
import React, { useState } from "react";
import "./page.scss";
import Link from "next/link";
import Image from "next/image";
import image from "../../assets/loginImage.png";
import { useRouter } from "next/navigation";
import { Logo } from "../../components/icons";
import { axiosLogin } from "../../server";
function Login() {
  const router = useRouter();
  const [form, setform] = useState({});
  const handlechange = (e) => {
    setform((pre) => ({
      ...form,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axiosLogin.post("login", form).then((e) => {
      window.localStorage.setItem("token", JSON.stringify(e.data.data)),
        router.push("/");
    }).catch((err) =>{
      alert(err.response.data.message);
    });
  };

  return (
    <div className="container loginWrapper">
      <div className="sectionOne">
        <div className="loginHeader">
          <div className="logo">
            <Logo />
          </div>
        </div>
        <div className="login">
          <h3>Sign In To eatly</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              onChange={handlechange}
              type="text"
              name="email"
              placeholder="Email"
            />
            <input
              onChange={handlechange}
              type="password"
              name="password"
              placeholder="Password"
            />
            <span className="forgot">Forget password</span>
            <button type="submit" className="prBtn">
              Sign in
            </button>
          </form>
          <div className="loginAccordion">
            Create A New Account?{" "}
            <Link className="hrefLink" href={"/register"}>
              Sign Up
            </Link>
          </div>
        </div>
        <div className="loginFooter">
          <span>Privacy police </span>
          <span>Copyright 2022</span>
        </div>
      </div>
      <div className="sectionTwo">
        <div className="loginImage">
          <Image alt="loginImage" src={image} />
        </div>
        <div className="sectionTwoAccordion">
          <h2>Find Foods With Love</h2>
          <p>
            Eatly Is The Food Delivery Dashboard And Having More Than 2K+ Dishes
            Including Asian, Chinese, Italians And Many More. Our Dashboard
            Helps You To Manage Orders And Money.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
