import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";
import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCartContext } from "../context/cart_context";
import { useWishlistContext } from "../context/wishlist_context";
import { toast } from "react-toastify";

const API = "http://localhost:8081/user/signin";
const my_cookies = new Cookies();

const Signin = () => {
  const [userSignIn, setUserSignIn] = useState({
    email: "",
    password: "",
  });

  const [cookies, setCookie] = useCookies(["token"]);
  const { getCartProducts, cart } = useCartContext();
  const { getWishlistProducts, wishlist } = useWishlistContext();

  const navigate = useNavigate();
  const loginUser = async (userObj) => {
    axios
      .post(API, userObj)
      .then(function (response) {
        handleLogin(response);
      })
      .catch(function (error) {
        toast.error(error.response.data);
        console.log(error);
      });
  };
  const handleLogin = (response) => {
    let expires = new Date(Date.now + 60000);
    setCookie("token", response.data.token, { path: "/", expires });
    let userLogIn = response.data.user;
    delete userLogIn.password;
    localStorage.setItem("user", JSON.stringify(userLogIn));
    const API = "http://localhost:8082/cart/" + response.data.token;
    getCartProducts(API);
    const API2 = "http://localhost:8081/wishlist/" + response.data.token;
    getWishlistProducts(API2);
    if (userLogIn.admin == false) {
      toast.success("Login Successful");
      navigate("/products");
    } else {
      toast.success("Admin Login Successful");
      navigate("/admin-page");
    }
  };

  useEffect(() => {
    if (my_cookies.get("token")) {
      navigate("/products");
    }
  }, []);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSignIn({ ...userSignIn, [name]: value });
  };
  const handleSubmit = (e) => {
    if (userSignIn.email === "" || userSignIn.password === "") {
      toast.info("Please fill all the fields!");
      return;
    }
    e.preventDefault();
    const newSignIn = { ...userSignIn };
    loginUser(newSignIn);
  };
  return (
    <div
      style={{
        width: "75%",
        margin: "10rem 20rem 10rem 35rem",
        maxWidth: "1000px",
        textAlign: "center",
      }}
    >
      <MDBCard className="card bg-dark text-white">
        <div style={{ display: "flex" }}>
          <divs>
            <img
              src="https://zhomprasse.com/assets/image/w-login.gif"
              className="card-img"
              alt="Stony Beach"
              style={{ width: "100%" }}
            />
          </divs>
          <div>
            <MDBCardBody className="px-5" style={{ margin: "2rem 0 0 5rem" }}>
              <h3 style={{ fontSize: "30px" }}>LOGIN</h3>
              <input
                className="input-class"
                type="text"
                name="email"
                onChange={handleInput}
                style={{
                  margin: "3rem 0 1rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                placeholder="Email"
                required
              />
              <br />
              <input
                className="input-class"
                type="password"
                name="password"
                onChange={handleInput}
                style={{
                  margin: "1rem 0 2rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                placeholder="Password"
                required
              />
              <div>
                <MDBBtn
                  style={{
                    margin: "3rem 0 2rem 0",
                    fontSize: "20px",
                    width: "50rem",
                  }}
                  size="lg"
                  onClick={handleSubmit}
                >
                  LogIn
                </MDBBtn>
              </div>
              <div style={{ margin: "0 0 0 0", fontSize: "15px" }}>
                New Here?
                <NavLink to="/signup">&nbsp;Create a new account</NavLink>
              </div>
            </MDBCardBody>
          </div>
        </div>
      </MDBCard>
    </div>
  );
};
export default Signin;
