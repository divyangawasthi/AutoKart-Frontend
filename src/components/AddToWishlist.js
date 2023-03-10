import { Button } from "../styles/Button";
import { useWishlistContext } from "../context/wishlist_context";
import { AiOutlineHeart } from "react-icons/ai";
import Cookies from "universal-cookie";

import Wrapper from "../styles/AddToWishlistStyle";
import { toast } from "react-toastify";
const AddToWishlist = ({ product }) => {
  const { addToWishlist } = useWishlistContext();
  const cookies = new Cookies();

  const { id } = product;

  const initiateAddToWishlist = (id, product) => {
    if (!cookies.get("token")) {
      toast.error("Please login first!");
    } else {
      addToWishlist(id, product);
    }
  };

  return (
    <Wrapper>
      <Button
        className="btn"
        onClick={() => initiateAddToWishlist(id, product)}
      >
        <AiOutlineHeart
          className="cart-trolley"
          style={{ marginBottom: "3px" }}
        />
        &emsp;Add To Wishlist
      </Button>
    </Wrapper>
  );
};

export default AddToWishlist;
