import { useState } from "react";
import CartAmountToggle from "./CartAmountToggle";
import { Button } from "../styles/Button";
import { useCartContext } from "../context/cart_context";
import { toast } from "react-toastify";
import { FiShoppingCart } from "react-icons/fi";
import Wrapper from "../styles/AddToCartStyle";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const AddToCart = ({ product }) => {
  const { addToCart } = useCartContext();

  const { id, quantity } = product;
  const cookies = new Cookies();
  const navigate = useNavigate();

  const [amount, setAmount] = useState(1);

  const setDecrease = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    } else {
      toast.info("Atleast 1 Quantity Required");
    }
  };

  const initiateAddToCart = (id, amount, product) => {
    if (!cookies.get("token")) {
      toast.error("Please login first!");
    } else {
      addToCart(id, amount, product);
    }
  };

  const setIncrease = () => {
    setAmount(amount + 1);
  };

  return (
    <Wrapper>
      {/* add to cart  */}
      <CartAmountToggle
        amount={amount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
      />

      <Button
        className="btn"
        onClick={() => initiateAddToCart(id, amount, product)}
      >
        <FiShoppingCart
          className="cart-trolley"
          style={{ marginBottom: "3px" }}
        />
        &emsp;Add To Cart
      </Button>
    </Wrapper>
  );
};

export default AddToCart;
