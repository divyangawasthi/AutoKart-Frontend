import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import Cookies from "universal-cookie";
import axios from "axios";

import { toast } from "react-toastify";

const CartContext = createContext();
const cookies = new Cookies();

const API = "http://localhost:8082/cart/" + cookies.get("token");

const initialState = {
  cart: [],
  total_item: "",
  total_price: "",
  total_amount: "",
  orderCart: [],
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getCartProducts = async (url) => {
    state.cart = [];
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const cart = await res.data;
      if (cart.length == 0) {
        clearCart();
        return;
      }
      for (let i = 0; i < cart.length; i++) {
        addToLocalCart(cart[i].id, cart[i].quantity, cart[i]);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const addToDB = (amount, product) => {
    const API = "http://localhost:8082/cart/add/" + cookies.get("token");
    product.quantity = amount;
    axios
      .post(API, product)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };

  const addToCart = (id, amount, product) => {
    if (!cookies.get("token")) {
      return;
    }
    addToDB(amount, product);
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    toast.success("Added to cart");
  };

  const addToLocalCart = (id, amount, product) => {
    if (!cookies.get("token")) {
      return;
    }
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const clearCart = (cart) => {
    dispatch({ type: "CLEAR_CART" });
  };

  const placeOrder = () => {
    clearCart();
  };
  useEffect(() => {
    dispatch({ type: "CART_TOTAL_ITEM" });
    getCartProducts(API);
  }, []);
  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        placeOrder,
        setDecrease,
        setIncrease,
        getCartProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };
