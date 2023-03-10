import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";
import Wrapper from "../styles/ListViewStyle";

const ListView = ({ products }) => {
  return (
    <Wrapper className="section">
      <div className="container grid">
        {products.map((curElem) => {
          const { id, name, imageUrl, price, description } = curElem;
          return (
            <div className="card grid grid-two-column">
              <NavLink to={`/singleproduct/${id}`}>
                <figure>
                  <img src={imageUrl} alt={name} style={{ width: "300px" }} />
                </figure>
              </NavLink>

              <div className="card-data">
                <h3 style={{ fontSize: "20px", color:"black" }}>{name}</h3>
                <p style={{ fontSize: "20px", color:"black" }}>
                  <FormatPrice price={price} />
                </p>
                <p>{description.slice(0, 90)}...</p>

                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                  <Button className="btn">Read More</Button>
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};
export default ListView;
