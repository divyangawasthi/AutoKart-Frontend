import React, { useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useProductContext } from "../context/productcontext";

const DeleteProduct = () => {
  const [product, setProduct] = useState({
    product_id: "",
  });

  const navigate = useNavigate();
  const { removeProduct } = useProductContext();

  const deleteProduct = (productObj) => {
    removeProduct(productObj.product_id);
    const API = "http://localhost:8080/product/delete/" + productObj.product_id;
    axios
      .delete(API)
      .then(function (response) {
        toast.success("Product Deleted");
        navigate("/admin-page");
      })
      .catch(function (error) {
        toast.error(error.response.data);
      });
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  };
  const handleSubmit = (e) => {
    if (product.product_id === "") {
      toast.info("Please fill all the fields!");
      return;
    }
    e.preventDefault();
    const newProduct = { ...product };
    deleteProduct(newProduct);
  };
  return (
    <div
      style={{
        width: "75%",
        margin: "10rem 20rem 10rem 35rem",
        maxWidth: "1000px",
        textAlign: "center",
      }}
    >
      <MDBCard className="card bg-dark text-white">
        <div style={{ display: "flex" }}>
          <divs>
            <img
              src="https://i.pinimg.com/originals/ff/fa/9b/fffa9b880767231e0d965f4fc8651dc2.gif"
              className="card-img"
              alt="Stony Beach"
              style={{ width: "100%" }}
            />
          </divs>
          <div>
            <MDBCardBody className="px-5" style={{ margin: "8rem 0 0 2rem" }}>
              <h3 style={{ fontSize: "30px" }}>DELETE PRODUCT</h3>
              <input
                className="input-class"
                type="text"
                name="product_id"
                style={{
                  margin: "3rem 0 1rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                onChange={handleInput}
                placeholder="PRODUCT ID"
                required
              />
              <br />
              <div>
                <MDBBtn
                  style={{
                    margin: "3rem 0 2rem 0",
                    fontSize: "20px",
                    width: "50rem",
                  }}
                  size="lg"
                  onClick={handleSubmit}
                >
                  DELETE
                </MDBBtn>
              </div>
            </MDBCardBody>
          </div>
        </div>
      </MDBCard>
    </div>
  );
};

export default DeleteProduct;
