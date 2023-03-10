import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "../context/productcontext";
import PageNavigation from "../components/PageNavigation";
import MyImage from "../components/MyImage";
import { Container } from "../styles/Container";
import FormatPrice from "../Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { Button } from "../styles/Button";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import AddToCart from "../components/AddToCart";
import Card from "react-bootstrap/Card";
import AddToWishlist from "../components/AddToWishlist";
import axios from "axios";
import { toast } from "react-toastify";
import Wrapper from "../styles/SingleProductStyle";
import { useNavigate } from "react-router-dom";

const API = "http://localhost:8080/product/";

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

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { removeProduct } = useProductContext();
  const navigate = useNavigate();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    category = categoryName(singleProduct.categoryId),
    quantity,
    imageUrl,
  } = singleProduct;

  const userObj = JSON.parse(localStorage.getItem("user"));
  const isUserAdmin = userObj.admin;

  const deleteProduct = (id) => {
    removeProduct(id);
    const API = "http://localhost:8080/product/delete/" + id;
    axios
      .delete(API)
      .then(function (response) {
        toast.success("Product Deleted");
        navigate("/admin-page");
      })
      .catch(function (error) {
        toast.error(error.response.data);
      });
  };

  useEffect(() => {
    getSingleProduct(`${API}+${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <>
      <PageNavigation title={name} />

      <Card
        style={{
          margin: "20px 40px 50px 40px",
          background:
            "radial-gradient(circle at 10% 20%, rgb(226, 240, 254) 0%, rgb(255, 247, 228) 90%)",
        }}
      >
        <Card.Body>
          <Wrapper>
            <Container className="container">
              <div className="grid grid-two-column">
                {/* product Images  */}
                <div className="product_images">
                  <MyImage imgs={imageUrl} />
                </div>

                {/* product dAta  */}
                <div className="product-data">
                  <h2 style={{ fontFamily: "'Anton', sans-serif" }}>{name}</h2>
                  <p className="product-data-price">
                    MRP :&nbsp;
                    <FormatPrice price={price} />
                  </p>
                  <p className="desc_para">{description}</p>
                  <div className="product-data-warranty">
                    <div className="product-warranty-data">
                      <TbTruckDelivery
                        className="warranty-icon"
                        color="green"
                      />
                      <p>Free Delivery</p>
                    </div>

                    <div className="product-warranty-data">
                      <TbReplace className="warranty-icon" color="blue" />
                      <p>7 Days Replacement</p>
                    </div>

                    <div className="product-warranty-data">
                      <FaShippingFast className="warranty-icon" color="green" />
                      <p>Fast Delivery </p>
                    </div>

                    <div className="product-warranty-data">
                      <MdSecurity className="warranty-icon" color="blue" />
                      <p>2 Year Warranty </p>
                    </div>
                  </div>

                  <div className="product-data-info">
                    <p style={{ fontSize: "2rem" }}>
                      Availability:
                      <span> {"In Stock"}</span>
                    </p>
                    <p style={{ fontSize: "2rem" }}>
                      ID : <span> {id} </span>
                    </p>
                    <p style={{ fontSize: "2rem" }}>
                      Category :<span> {category} </span>
                    </p>
                  </div>
                  <hr />
                  {!isUserAdmin ? (
                    <div style={{ display: "flex" }}>
                      {quantity > 0 && <AddToCart product={singleProduct} />}
                      <AddToWishlist product={singleProduct} />
                    </div>
                  ) : (
                    <div style={{ display: "flex" }}>
                      <Button
                        className="btn"
                        onClick={() => deleteProduct(id)}
                        style={{ fontSize: "15px" }}
                      >
                        &emsp;Delete Product
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Container>
          </Wrapper>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleProduct;
