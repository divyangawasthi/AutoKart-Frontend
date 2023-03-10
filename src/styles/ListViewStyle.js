import styled from "styled-components";
const Wrapper = styled.section`
  padding: 9rem 0;

  .container {
    max-width: 120rem;
  }

  .grid {
    gap: 3.2rem;
  }

  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.1);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
      border-radius: 10px;
    }
  }

  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    background: linear-gradient(-225deg, #5d9fff 0%, #b8dcff 48%, #6bbbff 100%);

    transition: all 0.2s linear;
    &:hover {
      transform: scale(1.1);
    }

    .card-data {
      padding: 0 2rem;
    }

    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
      color: black;
    }

    .btn {
      margin: 2rem 0;
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      font-size: 10px;
      justify-content: center;
      align-items: center;
      color: white;

      &:hover {
        background-color: rgb(98 84 243);
      }

      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }

    .btn-main .btn:hover {
      color: #fff;
    }
  }
`;

export default Wrapper;