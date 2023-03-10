import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import CartItemComp from "../components/CartItemComp";
import { useCartContext } from "../context/cart_context";
import { Button } from "../styles/Button";
import ConfirmBox from "../components/ConfirmBox";
import { toast } from "react-toastify";

const cookies = new Cookies();

const CartPage = () => {
  const { cart, clearCart } = useCartContext();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!cookies.get("token")) {
      toast.error("Please login first!");
      navigate("/signin");
    }
  }, []);

  const timeElapsed = Date.now() + 345600000;
  const today = new Date(timeElapsed);

  const placeorder = () => {
    navigate("/order-summary");
    clearCart();
  };
  function openDialog() {
    setOpen(true);
  }

  var total_shipping_fee = 0;
  var cart_total_price = 0;
  for (let i = 0; i < cart.length; i++) {
    cart_total_price += cart[i].amount * cart[i].price;
    total_shipping_fee += cart[i].amount * 5000;
  }

  var total_items = total_shipping_fee / 5000;

  if (cart.length === 0) {
    return (
      <EmptyDiv>
        <div>
          <h2
            style={{
              marginLeft: "90px",
              marginBottom: "20px",
              fontFamily: "'Anton', sans-serif",
            }}
          >
            Cart is Empty
          </h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            style={{ height: "300px" }}
          />
        </div>
        <div style={{ marginTop: "30px", marginLeft: "65px" }}>
          <NavLink to="/products">
            <MDBBtn block size="lg" style={{ fontSize: "15px" }}>
              Continue Shopping
            </MDBBtn>
          </NavLink>
        </div>
      </EmptyDiv>
    );
  }
  return (
    <>
      <section className="h-200  gradient-custom">
        <MDBContainer className="py-5 h-100" style={{ minHeight: "800px" }}>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <NavLink to="/products">
              <Button block size="lg" style={{ fontSize: "15px" }}>
                Continue Shopping
              </Button>
            </NavLink>
            <NavLink>
              <Button
                block
                size="lg"
                style={{ fontSize: "15px" }}
                onClick={clearCart}
              >
                Clear Cart
              </Button>
            </NavLink>
          </div>
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <MDBCard className="mb-4 w-100">
                <MDBCardHeader className="py-3">
                  <MDBTypography
                    tag="h5"
                    className="mb-0"
                    style={{ fontSize: "20px" }}
                  >
                    Cart - {total_items} items
                  </MDBTypography>
                </MDBCardHeader>
                {cart.map((curElem) => {
                  return <CartItemComp key={curElem.id} {...curElem} />;
                })}
              </MDBCard>

              <MDBCard className="mb-4">
                <MDBCardBody>
                  <p style={{ fontSize: "15px" }}>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p className="mb-0" style={{ fontSize: "15px" }}>
                    {parseInt(
                      today.toLocaleString("en-US", { day: "2-digit" })
                    )}
                    -{today.toLocaleString("en-US", { month: "long" })}-
                    {today.getFullYear()}
                  </p>
                </MDBCardBody>
              </MDBCard>

              <MDBCard className="mb-4 mb-lg-0">
                <MDBCardBody>
                  <p style={{ fontSize: "15px" }}>
                    <strong>We accept</strong>
                  </p>
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <MDBCardImage
                    className="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol md="4">
              <MDBCard className="mb-4">
                <MDBCardHeader>
                  <MDBTypography
                    tag="h5"
                    className="mb-0"
                    style={{ fontSize: "20px" }}
                  >
                    Summary
                  </MDBTypography>
                </MDBCardHeader>
                <MDBCardBody>
                  <MDBListGroup >
                    <MDBListGroupItem
                      className="d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                      style={{ fontSize: "15px" }}
                    >
                      Products
                      <span>
                        <FormatPrice price={cart_total_price} />
                      </span>
                    </MDBListGroupItem>
                    <MDBListGroupItem
                      className="d-flex justify-content-between align-items-center border-0 px-0 pb-0"
                      style={{ fontSize: "15px" }}
                    >
                      Shipping
                      <span>
                        <FormatPrice price={total_shipping_fee} />
                      </span>
                    </MDBListGroupItem>
                    <hr />
                    <MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div style={{ fontSize: "15px" }}>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0" style={{ fontSize: "15px" }}>
                            (including VAT)
                          </p>
                        </strong>
                      </div>
                      <span style={{ fontSize: "20px" }}>
                        <strong>
                          <FormatPrice
                            price={total_shipping_fee + cart_total_price}
                          />
                        </strong>
                      </span>
                    </MDBListGroupItem>
                  </MDBListGroup>

                  <MDBBtn
                    block
                    size="lg"
                    onClick={openDialog}
                    style={{ fontSize: "15px", marginTop: "15px" }}
                  >
                    Go to checkout
                  </MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <ConfirmBox
        open={open}
        closeDialog={() => setOpen(false)}
        title="Order Confirmation"
        message="Proceed with the order?"
        yesFunction={placeorder}
        imgUrl="https://media.giphy.com/media/7E5lFTBojaEHkokPyt/giphy.gif"
      />
    </>
  );
};

const EmptyDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  place-items: center;
  height: 80vh;
  justify-content: center;
`;

export default CartPage;
