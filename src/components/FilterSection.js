import { useFilterContext } from "../context/filter_context";
import FormatPrice from "../Helpers/FormatPrice";
import Card from "react-bootstrap/Card";
import Wrapper from "../styles/FilterSectionStyle";

const FilterSection = () => {
  const {
    filters: { text, category, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  const getCategoryName = (categoryId) => {
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

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => {
      return getCategoryName(curElem[attr]);
    });

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "categoryId");
  const companyData = getUniqueData(all_products, "company");

  return (
    <Card
      style={{
        width: "30rem",
        padding: "20px",
        marginTop: "150px",
        marginBottom: "100px",
        backgroundColor: "#e3f2fd",
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "20px" }}>Filters</Card.Title>
        <Wrapper>
          <div className="filter-search">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                name="text"
                placeholder="Search"
                value={text}
                onChange={updateFilterValue}
              />
            </form>
          </div>

          <div className="filter-category">
            <h3 className="fs-1">Category</h3>
            <div>
              {categoryData.map((curElem, index) => {
                return (
                  <button
                    key={index}
                    type="button"
                    name="category"
                    value={curElem}
                    className={curElem === category ? "active" : ""}
                    onClick={updateFilterValue}
                  >
                    {curElem}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="filter_price">
            <h3>Price</h3>
            <p>
              <FormatPrice price={price} />
            </p>
            <input
              type="range"
              step={100000}
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilterValue}
            />
          </div>
        </Wrapper>
      </Card.Body>
    </Card>
  );
};


export default FilterSection;
