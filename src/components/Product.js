import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const categoryName = (categoryId) => {
  var cat_name = "Common";
  if (categoryId == 1) {
    cat_name = "Car";
  } else if (categoryId == 2) {
    cat_name = "Motor Cycle";
  } else if (categoryId == 3) {
    cat_name = "Scooter";
  } else if (categoryId == 4) {
    cat_name = "Cycle";
  }
  return cat_name;
};

const Product = (curElem) => {
  const { id, name, imageUrl, price, description, categoryId } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img src={imageUrl} alt={name} />

          <figcaption className="caption">
            {categoryName(categoryId)}
          </figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{<FormatPrice price={price} />}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
