import React from "react";
import FormatPrice from "../Helpers/FormatPrice";

const OrderSummaryItem = ({ id, name, image, price, amount }) => {
  return (
    <div className="cart_heading grid grid-five-column">
      <div className="cart-image--name">
        <div>
          <figure>
            <img src={image} alt={id} />
          </figure>
        </div>
        <div>
          <p>{name}</p>
        </div>
      </div>
      {/* price   */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price} />
        </p>
      </div>

      <p>{amount}</p>

      {/* //Subtotal */}
      <div className="cart-hide">
        <p>
          <FormatPrice price={price * amount} />
        </p>
      </div>
    </div>
  );
};

export default OrderSummaryItem;
