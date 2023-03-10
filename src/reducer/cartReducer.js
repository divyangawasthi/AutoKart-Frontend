import axios from "axios";
import Cookies from "universal-cookie";

const cartReducer = (state, action) => {
  const cookies = new Cookies();

  if (action.type === "ADD_TO_CART") {
    let { id, amount, product } = action.payload;

    let cartProduct;

    let existingProduct = state.cart.find((curItem) => curItem.id == id);

    if (existingProduct) {
      let idx = state.cart.indexOf(existingProduct);
      let originalAmount = existingProduct.amount;

      let updatedCart = state.cart.filter((curItem) => curItem.id !== id);
      let cartProduct = {
        id: product.id,
        name: product.name,
        amount: amount + originalAmount,
        image: product.imageUrl,
        price: product.price,
        max: product.stock,
      };
      updatedCart.splice(idx, 0, cartProduct);
      return {
        ...state,
        cart: [...updatedCart],
      };
    } else {
      cartProduct = {
        id: product.id,
        name: product.name,
        amount,
        image: product.imageUrl,
        price: product.price,
        max: product.stock,
      };
    }

    return {
      ...state,
      cart: [...state.cart, cartProduct],
      orderCart: [...state.cart, cartProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let id = action.payload;
    const API =
      "http://localhost:8082/cart/delete/" + id + "/" + cookies.get("token");
    axios
      .delete(API)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
      orderCart: updatedCart,
    };
  }
  if (action.type === "CLEAR_CART") {
    const API = "http://localhost:8082/cart/clear-cart/" + cookies.get("token");
    axios
      .delete(API)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "SET_DECREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let decAmount = curElem.amount - 1;
        if (decAmount <= 1) {
          decAmount = 1;
        }
        return {
          ...curElem,
          amount: decAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  if (action.type === "SET_INCREMENT") {
    let updatedProduct = state.cart.map((curElem) => {
      if (curElem.id === action.payload) {
        let incAmount = curElem.amount + 1;

        return {
          ...curElem,
          amount: incAmount,
        };
      } else {
        return curElem;
      }
    });
    return { ...state, cart: updatedProduct };
  }

  return state;
};

export default cartReducer;
