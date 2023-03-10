import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/wishlistReducer";
import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const WishlistContext = createContext();
const cookies = new Cookies();

const API = "http://localhost:8081/wishlist/" + cookies.get("token");

const initialState = {
  wishlist: [],
  total_item: "",
};

const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getWishlistProducts = async (url) => {
    state.wishlist = [];
    try {
      const res = await axios.get(url);
      const wishlist = await res.data;
      if (wishlist.length == 0) {
        clearWishlist();
        return;
      }
      for (let i = 0; i < wishlist.length; i++) {
        addToLocalWishlist(wishlist[i].id, wishlist[i]);
      }
    } catch (error) {
      // console.log(error);
    }
  };

  const addToWishlistDB = (product) => {
    const API = "http://localhost:8081/wishlist/add/" + cookies.get("token");
    console.log(API);
    axios
      .post(API, product)
      .then(function (response) {
        toast.info(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearWishlist = (cart) => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  const addToWishlist = (id, product) => {
    if (!cookies.get("token")) {
      return;
    }
    addToWishlistDB(product);
    dispatch({ type: "ADD_TO_WISHLIST", payload: { id, product } });
  };

  const addToLocalWishlist = (id, product) => {
    if (!cookies.get("token")) {
      return;
    }
    dispatch({ type: "ADD_TO_WISHLIST", payload: { id, product } });
  };

  useEffect(() => {
    getWishlistProducts(API);
  }, []);
  return (
    <WishlistContext.Provider
      value={{
        ...state,
        removeItem,
        addToWishlist,
        clearWishlist,
        getWishlistProducts,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => {
  return useContext(WishlistContext);
};

export { WishlistProvider, useWishlistContext };
