import React from "react";
import FormatPrice from "../Helpers/FormatPrice";
import CartAmountToggle from "./CartAmountToggle";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBRipple,
  MDBRow,
  MDBTooltip,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useWishlistContext } from "../context/wishlist_context";

const cookies = new Cookies();

const CartItemComp = ({ id, name, image, price, amount }) => {
  

  const { removeItem, setDecrease, setIncrease } = useCartContext();  
  const { addToWishlist} = useWishlistContext();  

  let myProduct = {
    id:id,
    name:name,
    imageUrl:image,
    price:price,
  }


  const updateToDB = (pid, upAmount) => {
    if(upAmount!=0){
      const API =
      "http://localhost:8082/cart/update/" +
      pid +
      "/" +
      upAmount +
      "/" +
      cookies.get("token");
    axios
      .put(API)
      .then(function (response) {
        // console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    
  };

  const setUpChange = (id) =>{
    setIncrease(id);
    updateToDB(id, amount+1);
    
  }
  const setDownChange = (id) =>{
    setDecrease(id);
    updateToDB(id, amount-1);
  }

  return (
    <MDBCardBody> 
      <MDBRow>
        <MDBCol lg="3" md="12" className="mb-4 mb-lg-8">
          <MDBRipple
            rippleTag="div"
            rippleColor="light"
            className="bg-image rounded hover-zoom hover-overlay">
            <img src={image} className="w-100" />
              <div
                className="mask"
                style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" }}
              ></div>
          </MDBRipple>
        </MDBCol>

        <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
        <NavLink to={`/singleproduct/${id}`}>
          <p style={{ fontSize: "20px" }}>
            <strong>{name}</strong>
          </p>
          </NavLink>
          <p className="text-start mt-3">
            <strong>
              Price: <FormatPrice price={price} />
            </strong>
          </p>
          <MDBTooltip
            wrapperProps={{ size: "lg" }}
            wrapperClass="me-1 mb-2"
            title="View item"
          ><NavLink to={`/singleproduct/${id}`}>
            <MDBIcon
              fas
              icon="eye"
              style={{ fontSize: "15px", color:"white" }}
            />
            </NavLink>
          </MDBTooltip>
          <MDBTooltip
            wrapperProps={{ size: "lg" }}
            wrapperClass="me-1 mb-2"
            title="Remove item"
          >
            <MDBIcon
              fas
              icon="trash"
              style={{ fontSize: "15px" }}
              onClick={() => removeItem(id)}
            />
          </MDBTooltip>

          <MDBTooltip
            wrapperProps={{ size: "lg", color: "danger" }}
            wrapperClass="me-1 mb-2"
            title="Move to the wish list"
          >
            <MDBIcon fas="true" icon="heart" style={{ fontSize: "15px" }} onClick={() =>addToWishlist(id, myProduct)}/>
          </MDBTooltip>
          
        </MDBCol>
        <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
          <CartAmountToggle
            amount={amount}
            setDecrease={() => setDownChange(id)}
            setIncrease={() =>setUpChange(id)}
            cartPage={true}
          />        
        </MDBCol>
      </MDBRow>
      <hr/>  
    </MDBCardBody>
  );
};

export default CartItemComp;
