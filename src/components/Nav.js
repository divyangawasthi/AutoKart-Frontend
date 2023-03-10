import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineCar } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { GrUserAdmin } from "react-icons/gr";
import { CgMenu, CgClose } from "react-icons/cg";
import { useCartContext } from "../context/cart_context";
import Cookies from "universal-cookie";
import logOut from "../Helpers/Logout";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import ConfirmBox from "../components/ConfirmBox";
import { useWishlistContext } from "../context/wishlist_context";
import NavBar from "../styles/NavStyle"

const cookies = new Cookies();

const Nav = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [menuIcon, setMenuIcon] = useState();
  const { cart } = useCartContext();
  const { wishlist } = useWishlistContext();
  function openDialog() {
    setOpen(true);
  }

  const userObj = JSON.parse(localStorage.getItem("user"));
  const full_name = userObj.firstName + " " + userObj.lastName;
  const isUserAdmin = userObj.admin;

  // const full_name = "";
  // const isUserAdmin = false;
  var total_item = 0;
  for (let i = 0; i < cart.length; i++) {
    total_item += cart[i].amount;
  }

  var total_item_in_wishlist = wishlist.length;

  const userLogOut = () => {
    logOut();
    setOpen(false);
    navigate("/signin");
  };

  return (
    <>
      <NavBar>
        <div className={menuIcon ? "navbar active" : ""}>
          <ul className="navbar-lists">
            <li>
              <NavLink
                to="/"
                className="navbar-link "
                onClick={() => setMenuIcon(false)}
              >
                <AiOutlineHome
                  className="cart-trolley"
                  size={15}
                  style={{ marginRight: "5px", marginBottom: "3px" }}
                />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="navbar-link "
                onClick={() => setMenuIcon(false)}
              >
                <AiOutlineCar
                  className="cart-trolley"
                  size={15}
                  style={{ marginRight: "5px", marginBottom: "3px" }}
                />
                Products
              </NavLink>
            </li>
            {/* <li>
            <NavLink
              to="/about"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              About
            </NavLink>
          </li>
          
          <li>
            <NavLink
              to="/contact"
              className="navbar-link "
              onClick={() => setMenuIcon(false)}>
              Contact
            </NavLink>
          </li> */}

            {cookies.get("token") ? (
              <>
                <Dropdown style={{ fontSize: "10px", marginBottom: "3px" }}>
                  <Dropdown.Toggle
                    className="navbar-link shadow-0"
                    id="dropdown-basic"
                    style={{
                      fontSize: "15px",
                      background: "none",
                      color: "white",
                      transition: "transform .1s",
                    }}
                  >
                    <AiOutlineUser
                      className="cart-trolley"
                      size={15}
                      style={{ marginRight: "5px", marginBottom: "3px" }}
                    />
                    {full_name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu
                    style={{
                      fontSize: "15px",
                      width: "145px",
                      marginLeft: "50px",
                    }}
                  >
                    {!isUserAdmin ? (
                      <Dropdown.Item>
                        <NavLink to="/my-account" style={{ color: "black" }}>
                          <BiUserCircle
                            className="cart-trolley"
                            size={12}
                            style={{ marginRight: "5px", marginBottom: "3px" }}
                          />
                          My Account
                        </NavLink>
                      </Dropdown.Item>
                    ) : (
                      <Dropdown.Item>
                        <NavLink to="/admin-page">
                          <GrUserAdmin
                            className="cart-trolley"
                            size={15}
                            style={{ marginRight: "5px", marginBottom: "3px" }}
                          />
                          Admin Page
                        </NavLink>
                      </Dropdown.Item>
                    )}
                    <Dropdown.Item onClick={openDialog}>
                      <RiLogoutCircleRLine
                        className="cart-trolley"
                        size={12}
                        style={{ marginRight: "5px", marginBottom: "3px" }}
                      />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <li>
                <NavLink
                  to="/signin"
                  className="navbar-link "
                  onClick={() => setMenuIcon(false)}
                >
                  Login
                </NavLink>
              </li>
            )}

            {cookies.get("token") && !isUserAdmin ? (
              <>
                <li>
                  <NavLink
                    to="/wishlist"
                    className="navbar-link cart-trolley--link"
                  >
                    <AiOutlineHeart className="cart-trolley" />

                    <span className="cart-total--item">
                      {" "}
                      {total_item_in_wishlist}{" "}
                    </span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/cart-page"
                    className="navbar-link cart-trolley--link"
                  >
                    <FiShoppingCart className="cart-trolley" />
                    <span className="cart-total--item"> {total_item} </span>
                  </NavLink>
                </li>
              </>
            ) : null}
          </ul>

          {/* two button for open and close of menu */}
          <div className="mobile-navbar-btn">
            <CgMenu
              name="menu-outline"
              className="mobile-nav-icon"
              onClick={() => setMenuIcon(true)}
            />
            <CgClose
              name="close-outline"
              className="mobile-nav-icon close-outline"
              onClick={() => setMenuIcon(false)}
            />
          </div>
        </div>
      </NavBar>
      <ConfirmBox
        open={open}
        closeDialog={() => setOpen(false)}
        title="Confirmation !"
        message="Proceed with logout?"
        yesFunction={userLogOut}
        imgUrl="https://maxbio.com.br/wp-content/uploads/2019/11/loading.gif"
      />
    </>
  );
};

export default Nav;
