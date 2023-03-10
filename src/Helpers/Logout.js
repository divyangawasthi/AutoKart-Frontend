import React from "react";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { toast } from "react-toastify";

const cookies = new Cookies();

const logOut = () => {
  const API = "http://localhost:8081/user/sign-out/" + cookies.get("token");

  
  if (!cookies.get("token")) {
    toast.error("Please login first!");
  } else {
    cookies.remove("token");
    axios
      .get(API)
      .then(function (response) {
        const userObj = JSON.parse(localStorage.getItem("user"));
  userObj.admin=false;
  localStorage.setItem("user", JSON.stringify(userObj));
        toast.success("Logout Successful");
      })
      .catch(function (error) {
        toast.error(error.response.data);
        console.log(error);
      });
  }
};

export default logOut;
