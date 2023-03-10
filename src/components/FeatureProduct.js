import { useProductContext } from "../context/productcontext";
import Product from "./Product";
import Card from "react-bootstrap/Card";
import Wrapper from "../styles/FeaturedProductsStyle";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <Card
      style={{
        width: "150rem",
        padding: "20px",
        margin: "auto",
        background:
          "radial-gradient(circle at 0.7% 1%, rgb(215, 248, 247) 0%, rgb(102, 188, 239) 100.2%)",
      }}
    >
      <Card.Body>
        <Wrapper className="section">
          <div className="container">
            <div className="intro-data">Check Now!</div>
            <div className="common-heading">Our Featured Products</div>

            <div className="grid grid-three-column">
              {featureProducts.map((curElem) => {
                return <Product key={curElem.id} {...curElem} />;
              })}
            </div>
          </div>
        </Wrapper>
      </Card.Body>
    </Card>
  );
};

export default FeatureProduct;
