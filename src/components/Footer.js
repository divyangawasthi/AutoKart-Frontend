import React from "react";
import { NavLink } from "react-router-dom";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{
        background:
          "linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)",
        paddingTop: "10px",
      }}
    >
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
            <img className="logo" src="./images/logo-black.png" alt="my logo img"/>
              <p style={{ color: "black" }}>
                Wide range of automobiles from the comfort of your own home.
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h1 className="text-uppercase fw-bold mb-4 fs-2" color="black">
                Useful links
              </h1>
              <p>
                <NavLink to="/products" style={{ color: "black" }}>
                  Products
                </NavLink>
              </p>
              <p>
                <NavLink to="/my-account" style={{ color: "black" }}>
                  My Account
                </NavLink>
              </p>
              <p>
                <NavLink to="/cart-page" style={{ color: "black" }}>
                  Cart
                </NavLink>
              </p>
              <p>
                <NavLink to="/wishlist" style={{ color: "black" }}>
                  Wishlist
                </NavLink>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h1 className="text-uppercase fw-bold mb-4 fs-2">Contact</h1>
              <p style={{ color: "black" }}>
                <MDBIcon color="secondary" icon="home" className="me-2" />
                Bengaluru, Karnataka
              </p>
              <p style={{ color: "black" }}>
                <MDBIcon color="secondary" icon="envelope" className="me-3" />
                info@autokart.com
              </p>
              <p style={{ color: "black" }}>
                <MDBIcon color="secondary" icon="phone" className="me-3" /> + 01
                234 567 88
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "#F6F8FA", color: "black", fontSize: "15px" }}
      >
        © 2023 Copyright: AutoKart
      </div>
    </MDBFooter>
  );
};

export default Footer;
