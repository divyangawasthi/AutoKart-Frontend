import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import OrderSummaryItem from "../components/OrderSummaryItem";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { toast } from "react-toastify";
import jsPDF from "jspdf";

const cookies = new Cookies();

const OrderSummary = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.get("token")) {
      toast.error("Please login first!");
      navigate("/signin");
    }
  }, []);
  const { orderCart, clearCart } = useCartContext();

  // window.addEventListener("beforeunload", (event) => {
  //   clearCart();
  //   });
  // window.addEventListener("unload", (event) => {
  //   clearCart();
  //   });
  window.addEventListener("popstate", function (event) {
    navigate("/");
  });

  const generatePDF = () => {
    var doc = new jsPDF("l", "pt", "a2", false, 2);
    doc.html(document.querySelector(Wrapper), {
      callback: function (pdf) {
        let name = JSON.parse(localStorage.getItem("user")).firstName + ".pdf";
        pdf.save(name);
      },
    });
  };
  var total_shipping_fee = 0;
  var cart_total_price = 0;
  for (let i = 0; i < orderCart.length; i++) {
    cart_total_price += orderCart[i].amount * orderCart[i].price;
    total_shipping_fee += orderCart[i].amount * 5000;
  }

  if (orderCart.length === 0) {
    return (
      <EmptyDiv>
        <h3>No items</h3>
      </EmptyDiv>
    );
  }

  return (
    <Wrapper>
      <div className="order-placed">
        <h2>Order Summary</h2>
      </div>
      <div className="order-placed">
        <button
          className="button-class"
          onClick={generatePDF}
          type="primary"
          style={{ background: "none", border: "none", marginTop: "0px" }}
        >
          Generate Receipt
        </button>
      </div>

      <div className="container">
        <div className="cart_heading grid grid-five-column">
          <p>Item</p>
          <p className="cart-hide">Price</p>
          <p>Quantity</p>
          <p className="cart-hide">Subtotal</p>
        </div>
        <hr />

        <div className="cart-item">
          {orderCart.map((curElem) => {
            return <OrderSummaryItem key={curElem.id} {...curElem} />;
          })}
        </div>
        <div className="order-total--amount">
          <div className="order-total--subdata">
            <div>
              <p>Subtotal: </p>
              <p>
                <FormatPrice price={cart_total_price} />
              </p>
            </div>
            <div>
              <p>Shipping Fee:</p>
              <p>
                <FormatPrice price={total_shipping_fee} />
              </p>
            </div>
            <hr />
            <div>
              <p>Order Total: </p>
              <p>
                <FormatPrice price={total_shipping_fee + cart_total_price} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const EmptyDiv = styled.div`
  display: grid;
  place-items: center;
  height: 80vh;

  h3 {
    font-size: 4.2rem;
    text-transform: capitalize;
    font-weight: 300;
  }
`;
const Wrapper = styled.section`
  padding: 9rem 0;
  min-height: 100vh;

  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  .order-placed {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    letter-spacing: 0.01px;
    .button-class {
      text-decoration: underline;
      color: blue;
      margin-bottom: 50px;
    }
  }
  .cart-div {
    display: flex;
    justify-content: right;
  }
  .place-order-btn {
    width: 250px;
    font-size: 24px;
  }

  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }

  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;

    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }

    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;

      .color-style {
        width: 1.4rem;
        height: 1.4rem;

        border-radius: 50%;
      }
    }
  }

  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;

    .btn-clear {
      background-color: #e74c3c;
      text-size: 12px;
    }
  }

  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
    font-size: 1.4rem;

    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }

    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }

  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }

  .order-total--amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .order-total--subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }

    div:last-child {
      background-color: #fafafa;
    }

    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }

    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }

    .order-total--amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;

      .order-total--subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`;

export default OrderSummary;
