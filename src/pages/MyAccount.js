import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { useCartContext } from "../context/cart_context";
import { useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon,
} from "mdb-react-ui-kit";
import logOut from "../Helpers/Logout";
import { useWishlistContext } from "../context/wishlist_context";
import { toast } from "react-toastify";

const cookies = new Cookies();

const MyAccount = () => {
  const { cart } = useCartContext();
  const { wishlist } = useWishlistContext();

  var total_item = 0;
  for (let i = 0; i < cart.length; i++) {
    total_item += cart[i].amount;
  }
  var total_item_in_wishlist = wishlist.length;

  const userObj = JSON.parse(localStorage.getItem("user"));

  var email_link = "mailto: " + userObj.email;
  const navigate = useNavigate();

  const userLogOut = () => {
    logOut();
    navigate("/signin");
  };
  useEffect(() => {
    if (!cookies.get("token")) {
      toast.error("Please login first!");
      navigate("/signin");
    }
  }, []);
  return (
    <div className="vh-100">
      <MDBContainer
        className="container py-5 h-100"
        style={{ fontSize: "20px" }}
      >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBCardImage
                    src="https://static.vecteezy.com/system/resources/previews/006/541/188/original/bearded-male-cartoon-character-with-sunglasses-minimalist-cartoon-avatar-profile-illustration-free-vector.jpg"
                    className="rounded-circle"
                    fluid
                    style={{ width: "100px" }}
                  />
                </div>
                <MDBTypography tag="h4" style={{ fontSize: "20px" }}>
                  {userObj.firstName + " " + userObj.lastName}
                </MDBTypography>
                <MDBCardText
                  className="text-muted mb-4"
                  style={{ fontSize: "20px" }}
                >
                  <a href={email_link}>{userObj.email}</a>
                </MDBCardText>
                <div className="justify-content-between text-center mt-5 mb-2">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ marginRight: "4rem" }}>
                      <NavLink to="/wishlist">
                        <MDBBtn
                          className="mb-1 h5"
                          style={{ fontSize: "15px", width:"150px" }}
                        >
                          {total_item_in_wishlist}<br/>
                          Wishlist Items
                        </MDBBtn>
                      </NavLink>
                    </div>
                    <div >
                      <NavLink to="/cart-page">
                        <MDBBtn
                          className="mb-1 h5"
                          style={{ fontSize: "15px", width:"150px" }}
                        >
                          {total_item}<br/>Cart Items
                        </MDBBtn>
                      </NavLink>
                    </div>
                  </div>

                  
                </div>

                <NavLink to="/signin">
                  <MDBBtn
                    rounded
                    size="lg"
                    style={{ fontSize: "15px" , marginTop:"20px"}}
                    onClick={userLogOut}
                  >
                    Logout
                  </MDBBtn>
                </NavLink>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default MyAccount;
