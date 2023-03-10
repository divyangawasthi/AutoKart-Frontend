import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

const CartAmountToggle = ({ amount, setDecrease, setIncrease, cartPage }) => {
  return (
    <div className="d-flex mb-4" style={{ width: "150px" }}>
      <MDBBtn
        className="px-3 me-2"
        onClick={() => setDecrease()}
        style={{ fontSize: "15px", width: "30px" }}
      >
        <MDBIcon fas icon="minus" style={{ fontSize: "15px" }} />
      </MDBBtn>
      <div
        style={{ fontSize: "25px", marginLeft: "10px", marginRight: "10px" }}
      >
        {amount}
      </div>
      <MDBBtn
        className="px-3 ms-2"
        onClick={() => setIncrease()}
        style={{ fontSize: "15px", width: "30px" }}
      >
        <MDBIcon fas icon="plus" style={{ fontSize: "15px" }} />
      </MDBBtn>
    </div>
  );
};

export default CartAmountToggle;
