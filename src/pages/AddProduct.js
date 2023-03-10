import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:8080/product/add";

const AddProduct = () => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    description: "",
    imageUrl: "",
    price: "",
    categoryId: "",
  });

  const navigate = useNavigate();

  const addProductToDB = (productObj) => {
    axios
      .post(API, productObj)
      .then(function (response) {
        toast.success("Product Added");
        navigate("/admin-page");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddProduct({ ...addProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    if (
      addProduct.name === "" ||
      addProduct.description === "" ||
      addProduct.price === "" ||
      addProduct.imageUrl === "" ||
      addProduct.categoryId === ""
    ) {
      toast.info("Please fill all the fields!");
      return;
    }
    e.preventDefault();
    const newProduct = { ...addProduct };
    addProductToDB(newProduct);
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
              src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif"
              className="card-img"
              alt="Stony Beach"
              style={{ width: "100%" }}
            />
          </divs>
          <div>
            <MDBCardBody
              className="px-5"
              style={{ margin: "0rem 0 0 0rem", textTransform: "capitalize" }}
            >
              <h3 style={{ fontSize: "25px" }}>ADD A PRODUCT</h3>
              <input
                className="input-class"
                type="text"
                name="name"
                value={addProduct.name}
                onChange={handleInput}
                style={{
                  margin: "0.5rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                placeholder="Product Name"
                required
              />
              <br />
              <input
                className="input-class"
                type="text-area"
                name="description"
                value={addProduct.description}
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                onChange={handleInput}
                placeholder="Description"
                required
              />
              <br />
              <input
                className="input-class"
                type="text"
                name="imageUrl"
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                value={addProduct.imageUrl}
                onChange={handleInput}
                placeholder="Image URL"
                required
              />
              <br />
              <input
                className="input-class"
                type="number"
                name="price"
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                value={addProduct.price}
                onChange={handleInput}
                placeholder="Price"
                required
              />
              <br />
              <input
                className="input-class"
                type="number"
                name="categoryId"
                value={addProduct.categoryId}
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                onChange={handleInput}
                placeholder="Category Id"
                required
              />
              <div>
                <MDBBtn
                  style={{
                    margin: "1.5rem 0 1rem 0",
                    fontSize: "20px",
                    width: "50rem",
                  }}
                  size="lg"
                  onClick={handleSubmit}
                >
                  Add Product
                </MDBBtn>
              </div>
            </MDBCardBody>
          </div>
        </div>
      </MDBCard>
    </div>
  );
};

export default AddProduct;
