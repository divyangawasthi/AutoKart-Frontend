import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useWishlistContext } from "../context/wishlist_context";
import WishlistItemComp from "../components/WishlistItemComp";
import EmptyDiv from "../styles/WishlistStyle";
import { Button } from "../styles/Button";
import {
  MDBBtn,
  MDBCard,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { toast } from "react-toastify";

const cookies = new Cookies();

const Wishlist = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const { wishlist, clearWishlist } = useWishlistContext();
  useEffect(() => {
    if (!cookies.get("token")) {
      toast.error("Please login first!");
      navigate("/signin");
    }
  }, []);

  function openDialog() {
    setOpen(true);
  }

  if (wishlist.length === 0) {
    return (
      <EmptyDiv>
        <div>
          <h2
            style={{ marginLeft: "130px", fontFamily: "'Anton', sans-serif" }}
          >
            Wishlist is Empty
          </h2>
          <img src="https://www.mentormyboard.com/assets/img/empty-cart.png" />
        </div>
        <div style={{ marginTop: "30px" }}>
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
      <section
        className="h-200  gradient-custom"
        style={{ minHeight: "800px" }}
      >
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center my-4">
            <MDBCol md="8">
              <div
                style={{
                  marginTop: "2rem",
                  marginBottom: "2rem",
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
                    onClick={clearWishlist}
                  >
                    Clear Wishlist
                  </Button>
                </NavLink>
              </div>
              <MDBCard className="mb-4 w-100">
                <MDBCardHeader className="py-3">
                  <MDBTypography
                    tag="h5"
                    className="mb-0"
                    style={{ fontSize: "20px" }}
                  >
                    Wishlist - {} items
                  </MDBTypography>
                </MDBCardHeader>
                {wishlist.map((curElem) => {
                  return <WishlistItemComp key={curElem.id} {...curElem} />;
                })}
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* <ConfirmBox
        open={open}
        closeDialog={() => setOpen(false)}
        title="Order Confirmation"
        message="Proceed with the order?"
        yesFunction={placeorder}
      /> */}
    </>
  );
};

export default Wishlist;
