import axios from "axios";
import Cookies from "universal-cookie";

const wishlistReducer = (state, action) => {
  const cookies = new Cookies();

  if (action.type === "ADD_TO_WISHLIST") {
    let { id, product } = action.payload;

    let wishlistProduct;

    let existingProduct = state.wishlist.find((curItem) => curItem.id == id);

    if (existingProduct) {
      return {
        ...state,
      };
    } else {
      wishlistProduct = {
        id: product.id,
        name: product.name,
        image: product.imageUrl,
        price: product.price,
      };
    }

    return {
      ...state,
      wishlist: [...state.wishlist, wishlistProduct],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let id = action.payload;
    const API =
      "http://localhost:8081/wishlist/remove/" +
      id +
      "/" +
      cookies.get("token");
    axios
      .delete(API)
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
    let updatedWishlist = state.wishlist.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      wishlist: updatedWishlist,
    };
  }

  if (action.type === "CLEAR_WISHLIST") {
    const API =
      "http://localhost:8081/wishlist/clear-wishlist/" + cookies.get("token");
    axios
      .delete(API)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    return {
      ...state,
      wishlist: [],
    };
  }
  return state;
};

export default wishlistReducer;
