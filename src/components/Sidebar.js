import React from "react";
import { NavLink } from "react-router-dom";
import logOut from "../Helpers/Logout";
import { AiOutlineArrowRight } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div
      className="col-md-3 col-lg-2 sidebar-offcanvas pl-0"
      id="sidebar"
      role="navigation"
      style={{
        backgroundColor: "#e9ecef",
        height: "100vh",
        fontSize: "20px",
        width: "300px",
      }}
    >
      <ul className="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
        <li className="nav-item mb-2 mt-3">
          <a className="nav-link text-secondary" href="#">
            <h2>Admin Panel</h2>
          </a>
        </li>
        <li className="nav-item mb-2 ">
          <i
            className="fas fa-user font-weight-bold"
            style={{ color: "black" }}
          ></i>{" "}
          <span className="ml-3" style={{ color: "black" }}>
            &nbsp;&nbsp;Users
          </span>
          <li style={{ textIndent: "2em" }}>
            <NavLink className="nav-link text-secondary" to="/add-user">
              <AiOutlineArrowRight
                className="cart-trolley"
                size={15}
                style={{
                  marginRight: "5px",
                  marginBottom: "3px",
                  color: "black",
                }}
              />
              <span style={{ color: "blue" }}>Add a User</span>
            </NavLink>
          </li>
          <li style={{ textIndent: "2em" }}>
            <NavLink className="nav-link text-secondary" to="/delete-user">
              <AiOutlineArrowRight
                className="cart-trolley"
                size={15}
                style={{
                  marginRight: "5px",
                  marginBottom: "3px",
                  color: "black",
                }}
              />
              <span style={{ color: "blue" }}>Delete a User</span>
            </NavLink>
          </li>
        </li>
        <li className="nav-item mb-2 ">
          <i
            className="fa-sharp fa-solid fa-cart-shopping"
            style={{ color: "black" }}
          ></i>{" "}
          <span className="ml-3" style={{ color: "black" }}>
            &nbsp;&nbsp;Products
          </span>
          <li style={{ textIndent: "2em" }}>
            <NavLink className="nav-link text-secondary" to="/add-product">
              <AiOutlineArrowRight
                className="cart-trolley"
                size={15}
                style={{
                  marginRight: "5px",
                  marginBottom: "3px",
                  color: "black",
                }}
              />
              <span style={{ color: "blue" }}>Add a Product</span>
            </NavLink>
          </li>
          <li style={{ textIndent: "2em" }}>
            <NavLink className="nav-link text-secondary" to="/delete-product">
              <AiOutlineArrowRight
                className="cart-trolley"
                size={15}
                style={{
                  marginRight: "5px",
                  marginBottom: "3px",
                  color: "black",
                }}
              />
              <span style={{ color: "blue" }}>Delete a Product</span>
            </NavLink>
          </li>
        </li>

        <li className="nav-item mb-2 " onClick={logOut}>
          <NavLink
            className="nav-link text-secondary"
            to="/signin"
            style={{ color: "black" }}
          >
            <i
              className="fa-solid fa-right-from-bracket"
              style={{ color: "black" }}
            ></i>{" "}
            <span className="ml-3" style={{ color: "black" }}>
              &nbsp;&nbsp;Logout
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
