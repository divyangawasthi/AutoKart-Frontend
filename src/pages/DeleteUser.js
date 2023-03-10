import React, { useState } from "react";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const DeleteUser = () => {
  const [userSignIn, setUserSignIn] = useState({
    user_id: "",
  });


  const navigate = useNavigate();
  const deleteUser = (userObj) => {
    const API = "http://localhost:8081/user/delete/" + userObj.user_id;
    axios
      .delete(API)
      .then(function (response) {
        toast.success("User Deleted");
        navigate("/admin-page");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserSignIn({ ...userSignIn, [name]: value });
  };
  const handleSubmit = (e) => {
    if (userSignIn.email === "" || userSignIn.password === "") {
      toast.info("Please fill all the fields!");
      return;
    }
    e.preventDefault();
    const newSignIn = { ...userSignIn };
    deleteUser(newSignIn);
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
              src="https://cdn.dribbble.com/users/2124240/screenshots/6118828/delete_icon_intraction.gif"
              className="card-img"
              alt="Stony Beach"
              style={{ width: "100%" }}
            />
          </divs>
          <div>
            <MDBCardBody className="px-5" style={{ margin: "8rem 0 0 2rem" }}>
              <h3 style={{ fontSize: "30px" }}>DELETE USER</h3>
              <input
                className="input-class"
                type="text"
                name="user_id"
                style={{
                  margin: "3rem 0 1rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                onChange={handleInput}
                placeholder="USER ID"
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

export default DeleteUser;
