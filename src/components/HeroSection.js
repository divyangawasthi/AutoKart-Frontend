import { NavLink } from "react-router-dom";
import { Button } from "../styles/Button";
import React from "react";
import Wrapper from "../styles/HeroSectionStyle"
const HeroSection = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="grid grid-two-column">
          <div className="hero-section-data">
            {/* <p className="intro-data">Welcome to </p> */}
            {/* <h1 style={{fontFamily:"'Josefin Sans', sans-serif"}}> AutoKart </h1> */}
            <img className="logo" src="./images/logo-black.png" alt="my logo img" style={{marginLeft:"-40px"}}/>

            <p>
              Welcome to AutoKart, where you can shop for a wide range of
              automobiles from the comfort of your own home. Our website offers
              a user-friendly interface that is easy to navigate, making it
              simple for you to find the perfect vehicle to suit your needs. Our
              selection of automobiles includes everything from compact cars to
              SUVs and luxury vehicles, with options for every budget.
            </p>
            <NavLink to="/products">
              <Button style={{ fontSize: "18px" }}>shop now</Button>
            </NavLink>
          </div>
          {/* our homepage image  */}
          <div className="hero-section-image">
            <figure>
              <img
                src="images/background.png"
                alt="hero-section-photo"
                className="img-style"
              />
            </figure>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};


export default HeroSection;
