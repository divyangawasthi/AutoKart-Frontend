import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import { useWishlistContext } from "../context/wishlist_context";
import { NavLink } from "react-router-dom";

import {
  MDBCardBody,
  MDBCol,
  MDBIcon,
  MDBRipple,
  MDBRow,
  MDBTooltip,
} from "mdb-react-ui-kit";
import { useCartContext } from "../context/cart_context";
import { toast } from "react-toastify";

const WishlistItemComp = ({ id, name, image, price }) => {
  let myProduct = {
    id: id,
    name: name,
    imageUrl: image,
    price: price,
  };

  const { removeItem } = useWishlistContext();
  const { cart, addToCart } = useCartContext();

  const initiateAddToCart = (id, myProduct) => {
    let existingProduct = cart.find((curItem) => curItem.id == id);
    if (existingProduct) {
      toast.info("Product already present in cart");
    } else {
      addToCart(id, 1, myProduct);
    }
  };

  return (
    <MDBCardBody>
      <MDBRow>
        <MDBCol lg="3" md="12" className="">
          <MDBRipple
            rippleTag="div"
            rippleColor="light"
            className="bg-image rounded hover-zoom hover-overlay"
          >
            <img src={image} className="w-100" />
            <div
              className="mask"
              style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
            ></div>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg="5" md="6" className="lg-0">
          <NavLink to={`/singleproduct/${id}`}>
            <p style={{ fontSize: "22px" }}>
              <strong>{name}</strong>
            </p>
          </NavLink>
          <p className="text-start" style={{ fontSize: "22px" }}>
            <strong>
              Price: <FormatPrice price={price} />
            </strong>
          </p>
          </MDBCol>
          <MDBCol>
          <MDBTooltip
            wrapperProps={{ size: "lg" }}
            wrapperClass="me-1 mb-2"
            title="View item"
            color="success"

          >
            <NavLink to={`/singleproduct/${id}`}>
              <MDBIcon
                fas
                icon="eye"
                style={{ fontSize: "20px", color: "white"}}
              />
            </NavLink>
          </MDBTooltip>
          <MDBTooltip
            wrapperProps={{ size: "lg" }}
            wrapperClass="me-1 mb-2"
            title="Add to cart"
          >
            <MDBIcon
              fas
              icon="cart-plus"
              style={{ fontSize: "20px" }}
              onClick={() => initiateAddToCart(id, myProduct)}
            />
          </MDBTooltip>
          <MDBTooltip
            wrapperProps={{ size: "lg" }}
            wrapperClass="me-1 mb-2"
            title="Remove item"
          >
            <MDBIcon
              fas
              icon="trash"
              style={{ fontSize: "20px" }}
              onClick={() => removeItem(id)}
            />
          </MDBTooltip>
        </MDBCol>
      </MDBRow>
      <hr />
    </MDBCardBody>
  );
};

export default WishlistItemComp;
