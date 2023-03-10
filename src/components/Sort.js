import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";
import Dropdown from "react-bootstrap/Dropdown";

const Sort = () => {
  const {
    filter_products,
    grid_view,
    setGridView,
    setListView,
    fsorting,
  } = useFilterContext();

  const [value, setValue] = useState("Price(lowest)");
  const handleSelect = (e) => {
    setValue(e);
  };
  return (
    <Wrapper className="sort-section">
      {/* 1st column  */}
      <div className="sorting-list--grid">
        <button
          className={grid_view ? "active sort-btn" : "sort-btn"}
          onClick={setGridView}
        >
          <BsFillGridFill className="icon" />
        </button>

        <button
          className={!grid_view ? "active sort-btn" : " sort-btn"}
          onClick={setListView}
        >
          <BsList className="icon" />
        </button>
      </div>
      {/* 2nd column  */}
      <div>
        <p
          style={{ fontSize: "20px", marginTop: "2rem" }}
        >{`${filter_products.length} Product(s) Available`}</p>
      </div>

      {/* 3rd column  */}
      <div className="sort-selection" style={{ marginBottom: "0rem" }}>
        <form action="#">
          <label htmlFor="sort"></label>
          <div className="select">
            <Dropdown onSelect={handleSelect} title="Sort">
              <Dropdown.Toggle
                className="navbar-link shadow-0"
                id="dropdown-basic"
                style={{
                  fontSize: "15px",
                  color: "black",
                  transition: "transform .1s",
                  width: "150px",
                  backgroundColor: "#e3f2fd",
                }}
              >
                {value}
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ fontSize: "15px", width: "145px" }}>
                <Dropdown.Item
                  eventKey="Price(lowest)"
                  onClick={() => fsorting("lowest")}
                  value="highest"
                >
                  Price(lowest)
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Price(highest)"
                  onClick={() => fsorting("highest")}
                  value="highest"
                >
                  Price(highest)
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Name(a-z)"
                  onClick={() => fsorting("a-z")}
                >
                  Name(a-z)
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="Name(z-a)"
                  onClick={() => fsorting("z-a")}
                >
                  Name(z-a)
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      margin: 1.5rem 0 1.5rem 0;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    cursor: pointer;
    font-size: 15px;

    .sort-select--option {
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort;
