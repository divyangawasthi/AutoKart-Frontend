import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MainWrapper from "../styles/MyImageStyle"


const MyImage = ({ imgs = [{ url: "" }] }) => {

  return (
    <MainWrapper>
      <Card className="card-class" sx={{ maxWidth: 800 }}>
        <div className="image-box">
          <img src={imgs} alt="photo" />
        </div>
        <CardContent></CardContent>
      </Card>
    </MainWrapper>
  );
};



export default MyImage;
