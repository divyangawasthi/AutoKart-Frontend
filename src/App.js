import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import ErrorPage from "./pages/ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignUp from "./pages/Signup";
import SignIn from "./pages/Signin";
import Logout from "./Helpers/Logout";
import OrderSummary from "./pages/OrderSummary";
import Cookies from "universal-cookie";
import { useEffect, useState } from "react";
import MyAccount from "./pages/MyAccount";
import AdminPage from "./pages/AdminPage";
import AddUser from "./pages/AddUser";
import DeleteUser from "./pages/DeleteUser";
import DeleteProduct from "./pages/DeleteProduct";
import AddProduct from "./pages/AddProduct";
import CartPage from "./pages/CartPage";
import Wishlist from "./pages/Wishlist";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const cookies = new Cookies();

const App = () => {
  const [name, setName] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgba(29 ,29, 29, .8)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",

      bg: "#81d4fa",
      myColor: "#42a5f5",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  useEffect(() => {
    if (cookies.get("token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [JSON.parse(sessionStorage.getItem("user"))]);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/admin-page" element={<AdminPage />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/delete-user" element={<DeleteUser />} />
          <Route path="/delete-product" element={<DeleteProduct />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/wishlist" element={<Wishlist />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
        <ToastContainer
          style={{ fontSize: "13px", marginTop: "5rem" }}
          autoClose={2000}
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
