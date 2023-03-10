import FilterSection from "../components/FilterSection";
import ProductList from "../components/ProductList";
import Sort from "../components/Sort";
import Wrapper from "../styles/ProductStyle"


const Products = () => {
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div className="filter-class">
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};



export default Products;
