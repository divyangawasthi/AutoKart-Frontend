import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { MDBBtn, MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import axios from "axios";
import { toast } from "react-toastify";

const API = "http://localhost:8081/user/signup";

const AddUserComp = () => {
  const [userReg, setUserReg] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const registerUser = (userObj) => {
    axios
      .post(API, userObj)
      .then(function (response) {
        toast.success("User Added");
        navigate("/admin-page");
      })
      .catch(function (error) {
        toast.error(error.response.data);
      });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserReg({ ...userReg, [name]: value });
  };

  const handleSubmit = (e) => {
    if (
      userReg.email === "" ||
      userReg.password === "" ||
      userReg.firstName === "" ||
      userReg.lastName === ""
    ) {
      toast.error("Please fill all the fields!");
      return;
    }
    e.preventDefault();
    const newUser = { ...userReg };
    console.log(newUser);
    registerUser(newUser);
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
              src="https://i.pinimg.com/originals/6c/67/8c/6c678c23d360432d5dad8c4aae4d48ca.gif"
              className="card-img"
              alt="Stony Beach"
              style={{ width: "100%" }}
            />
          </divs>
          <div>
            <MDBCardBody
              className="px-5"
              style={{ margin: "1rem 0 0 5rem", textTransform: "capitalize" }}
            >
              <h3 style={{ fontSize: "30px" }}>ADD NEW USER</h3>
              <input
                className="input-class"
                type="text"
                name="firstName"
                value={userReg.fname}
                onChange={handleInput}
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                placeholder="First Name"
                required
              />
              <br />
              <input
                className="input-class"
                type="text"
                name="lastName"
                value={userReg.lname}
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                onChange={handleInput}
                placeholder="Last Name"
                required
              />
              <br />
              <input
                className="input-class"
                type="text"
                name="email"
                value={userReg.email}
                onChange={handleInput}
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                placeholder="Email"
                required
              />
              <br />
              <input
                className="input-class"
                type="password"
                name="password"
                value={userReg.password}
                onChange={handleInput}
                style={{
                  margin: "1rem 0 0rem 0",
                  fontSize: "15px",
                  width: "80rem",
                }}
                placeholder="Password"
                required
              />
              <div>
                <MDBBtn
                  style={{
                    margin: "1rem 0 2rem 0",
                    fontSize: "20px",
                    width: "50rem",
                  }}
                  size="lg"
                  onClick={handleSubmit}
                >
                  Register
                </MDBBtn>
              </div>
            </MDBCardBody>
          </div>
        </div>
      </MDBCard>
    </div>
  );
};
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      width:35%;
    }
    .input-class{
        padding: 1rem;
        margin: 1rem;
        width: 80%;
        font-size: 16px;
    }
    .signup-heading{
      margin: 3rem;
      font-size: 30px;
    }
    .btn-class{
      margin: 3rem;
      font-size:16px;
    }
  }
    
  `;
export default AddUserComp;
