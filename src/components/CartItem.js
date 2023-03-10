import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import CartToggle from "./CartToggle";

const cookies = new Cookies();

const CartItem = ({ id, name, image, price, amount }) => {
  const updateToDB = (pid, upAmount) => {
    const API =
      "http://localhost:8082/cart/update/" +
      pid +
      "/" +
      upAmount +
      "/" +
      cookies.get("token");
    console.log(API);
    axios
      .put(API)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const { removeItem } = useCartContext();
  const [myAmount, setMyAmount] = useState(amount);
  const setDecrease = () => {
    if (amount > 1) {
      // setMyAmount(myAmount-1)
      // updateToDB(id, myAmount-1)
      amount = amount - 1;
    }
  };

  const setIncrease = () => {
    setMyAmount(myAmount + 1);
    updateToDB(id, myAmount + 1);
  };

  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>
            <NavLink to={`/singleproduct/${id}`}>{name}</NavLink>
          </p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      {/* Quantity  */}
      <CartToggle
        amount={myAmount}
        setDecrease={setDecrease}
        setIncrease={setIncrease}
        cartPage={true}
      />

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>

      <div>
        <FaTrash className="remove_icon" onClick={() => removeItem(id)} />
      </div>
    </div>
  );
};

export default CartItem;
